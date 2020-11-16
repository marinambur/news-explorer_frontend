import React from 'react';
import './GoodPopup.css';

const GoodPopup = ({isGoodPopupOpen, onEnter, close}) => {


    return (
        <div className={`popup ${isGoodPopupOpen ? 'popup_opened' : ''}`}>
            <form className="popup__container" method="post" action="#">
                <button onClick={close} className="button-close popup__button-close" type="button"></button>
                <h2 className="popup__title">Пользователь успешно зарегистрирован!</h2>
                <p onClick={onEnter} className="popup__login">Войти</p>


            </form>
        </div>
    );
}

export default GoodPopup;