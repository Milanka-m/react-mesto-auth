import React from 'react';

function InfoTooltip ({ isOpen, onClose, icon, messege }) {
  const popupOpened = `${isOpen && 'popup_opened'}`;
  
  return (
    <div className={`popup ${popupOpened}`}>
      <div className="popup__container">
        <button className="popup__close link" type="button" aria-label="Закрыть попап" onClick={onClose}></button>
        <img className="popup__info-icon" src={icon} alt="изображение"/>
        <p className="popup__info-text">{messege}</p>
      </div>
    </div>
    
  );
}

export default InfoTooltip;