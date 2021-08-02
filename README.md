# Проект: Mesto-react

Проект представляет собой одностраничный сайт, который создан на Create React App.
Состоит из 4 основных блоков, включая шапку и подвал сайта.
Проект предоставляет возможность пользователю зарегистрироваться, авторизоваться, обновить данные профиля и аватар, а также добавить на страничку или удалить свою собственную карточку, поставить или снять "лайк" карточкам.
[Ссылка на проект в GitHub Pages](https://milanka-m.github.io/react-mesto-auth/)


-------
### Используемые технологии:
* создание и импорт функциональных компонентов;
* декларативный подход и использование props при создании компонентов;
* поднятие стейта;
* переменные внутреннего состояния: хук React.useState;
* маршрутизация, используя принципы REST API;
* защищенные маршруты с поомощью НОС-компонента; 
* работа с локальным хранилищем localStorage и jwt токеном;
* рендер карточек на страницу используя api-запрос на сервер и эффект при монтировании компонента: хук React.useEffect;
* cоздание и подключение контекста: глобальный стейт React.useContext для работы с формами всплывающих диалоговых окон;
* обновление профиля используя api-запрос на сервер и управление полями формы при помощи "управляемых компонентов";
* обновление аватара используя api-запрос на сервер и управление полем формы используя хух React.useRef;
* реализация лайка/дизлайка и удаления карточки c помощью api-запроса на сервер и хука React.useState;
* открытие и закрытие всплывающих диалоговых окон (попап) "Редактировать профиль", "Новое место", "Изображение" с помощью хуков React.useState;
* выравнивание и построения сеток с помощью flex;
* абсолютное и относительное позиционирование элементов;
* разработка интерфейса для разных устройств с помощью построения медиазапросов; 
* оптимизация шрифтов под устройства с различным разрешением;
* оптимизация изображений для более быстрой загрузки сайта;
* работа с макетом в Figma
[Ссылка на макет в Figma](https://www.figma.com/file/StZjf8HnoeLdiXS7dYrLAh/JavaScript.-Sprint-4);
* cоздана Nested файловая структура по методологии БЭМ;
* псевдокласс :hover состояния ссылок при наведении указателя мыши;
* семантические элементы HTML5.

### Локальная разработка
Если вы хотите работать с проектом локально:

* разверните этот репозиторий и клонируйте свою версию репозитория
* установить зависимости npm
    #### npm install
* запустить сборку проекта в режиме просмотра. Эта команда запустит проект в режиме просмотра, что означает, что каждый раз, когда вы вносите изменения в источник проекта, он будет компилироваться в dist папку
   #### npm run build
* установить зависимости директории в которой находится проект
   #### cd docs && npm install
* запустить сервер для проекта локально
   #### npm run start

Если все прошло хорошо, теперь у вас есть проект, работающий на http://localhost:3000
