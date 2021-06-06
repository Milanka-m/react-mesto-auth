import React from 'react';

function PopupWithForm({ onSubmit, isOpen, name, title, onClose, children, nameButton }) {
  const popupOpened = `${isOpen && 'popup_opened'}`;
  return (
    <div className={`popup ${popupOpened}`}>
      <div className="popup__container">
        <button className="popup__close link" type="button" aria-label="Закрыть попап" onClick={onClose}></button>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <div className="popup__form-container">
            <h2 className="popup__form-title">{title}</h2> 
            {children}
          </div>
          <fieldset className="popup__form-handlers">
              <button type="submit" className="popup__form-button link">{nameButton}</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;