import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';
import { Switch, Route, Redirect, withRouter, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import iconErrorAuth from '../images/icon-auth-error.svg';
import iconRegisterAuth from '../images/icon-auth-login.svg';
import api from '../utils/api';
import * as auth from '../auth';

 
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isInfoRegisterPopupOpen, setIsInfoRegisterPopupOpen] = React.useState(false)

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});
  const [currentCard, setCurrentCard] = React.useState({});

  const [cards, setCards] = React.useState([]);
  
  // стейт который отвечает залогинен пользователь или нет
  const [loggedIn, setLoggedIn] = React.useState(false);
  // стейт в котором хранится email пользователя
  const [userEmail, setUserEmail] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(false);
  
  const history = useHistory();

  // побочный эффект
  //checkToken() вызовится один раз при монтировании компонента
  React.useEffect(() => {
    checkToken();
  }, [])

  // побочный эффект
  // если loggedIn = true, произайдёт редирект на главную страницу
  React.useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [loggedIn])

  function handleError (error) {
    console.log(error);
  }

  function handleLogin ({ email, password }) {
    auth.authorize(email, password)
    .then((res) => {
      const { token } = res;
      localStorage.setItem('jwt', token);
      setLoggedIn(true);
    })
    .catch(handleError)
  }

  function handleRegister ({ email, password }) {
    auth.register(email, password)
      .then((res) => {
        const { jwt, data } = res;
        const { email } = data;
        console.log(email);
        localStorage.setItem('jwt', jwt);
        setUserEmail(email);
        setLoggedIn(true);
        setErrorMessage(false);
        setIsInfoRegisterPopupOpen(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(true);
        setIsInfoRegisterPopupOpen(true);
      })
  }

  function handleLogout () {
    // очищаем пользовательские данные
    setUserEmail('');
    // возвращаем loggedIn в первоначальное состояние
    setLoggedIn(false);
    // очищаем localStorage от токена
    localStorage.removeItem('jwt');
  }

  // функция проверяет аутитенсифицирован ли пользователь
  // получает токен из localStorage, если он не пустой получет с сервера объект со свойством email
  function checkToken () {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then(res => {
          const { data } = res;
          const { email } = data;
          setUserEmail(email)
          // пользователь залогинен
          setLoggedIn(true);
        })
        .catch(handleError)
    }
   
  }
  
  React.useEffect(() => { 
    api.getCards() 
    // если ответ сервера положительный, в стейт приходит массив карточек 
    // каждый объект карточки из данного массива имеет следующие поля: _id, name, link, likes 
      .then(res => {
        setCards(res);
      }) 
      .catch(handleError) 
  }, []); 

  // функция лайка и дизлайка карточки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      // Отправляем запрос в API и получаем обновлённые данные карточки
      api.addLikeCard(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(handleError)
    } else {
            api.removeLikeCard(card._id, isLiked)
              .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
              })
              .catch(handleError)
           }
  } 

  // функция удаления карточки
  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.removeCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id))
      })
      .catch(handleError)
  }

  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  } 

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoRegisterPopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  // эффект при монтировании компонента
  // формирует api запрос для получения данных пользователя при загрузке страницы
  React.useEffect(() => {
    api.getUsers()
      .then(user => {
        setCurrentUser(user);
      })
      .catch(handleError)
  }, [])

  // Обработчик api запроса для обновления профильных данных
  function handleUpdateUser({ name, about }) {
    api.editUser({ name, about })
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(handleError)
  } 

  // Обработчик api запроса для обновления аватара
  function handleUpdateAvatar({avatar}) {
    api.editAvatar({avatar})
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
        })
      .catch(handleError)
  }

  // Обработчик api запроса для создания новой карточки
  function handleAddPlaceSubmit({ name, link }) {
    api.addCard({ name, link })
      .then(newCard => {
        setCurrentCard(newCard);
        setCards([...cards, newCard]); 
        closeAllPopups();
      })
      .catch(handleError)
  }

  return (
  <Switch>
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={currentCard}>
        <div className="page">
          <div className="root">
          
            <Header email={userEmail} handleLogout={handleLogout} />
         
            <ProtectedRoute path="/" loggedIn={loggedIn} 
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              onEditProfile={handleEditProfileClick} 
              onAddPlace={handleAddPlaceClick} 
              onEditAvatar={handleEditAvatarClick} 
              onCardClick={handleCardClick}
              component={Main}>
        
            </ProtectedRoute>

            <Route exat path="/sign-in">
              <Login handleLogin={handleLogin} />
            </Route>

            <Route path="/sign-up">
              <Register handleRegister={handleRegister} />
            </Route>

            {errorMessage ? 
              <InfoTooltip 
                icon={iconErrorAuth} 
                messege="Что-то пошло не так!" 
                isOpen={isInfoRegisterPopupOpen} 
                onClose={closeAllPopups} /> : 
              <InfoTooltip 
                icon={iconRegisterAuth} 
                messege="Вы успешно зарегистрировались!" 
                isOpen={isInfoRegisterPopupOpen} 
                onClose={closeAllPopups} />
            }

            <Route>
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>

            <Footer />

            <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
         
            <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
         
            <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

            <PopupWithForm title="Вы уверены ?" name="removecard" nameButton="Да" />
           
            <ImagePopup 
              isOpen={isImagePopupOpen}
              card={selectedCard} 
              onClose={closeAllPopups}
              link={selectedCard.link}
              name={selectedCard.name} />
          </div>
        </div>
 
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  </Switch>
  );
}

export default withRouter(App);
