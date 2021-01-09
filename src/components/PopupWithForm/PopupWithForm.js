
import React from 'react';
import './PopupWithForm.css';

    const PopupWithForm = ({ isPopupOpen, closePopup, isConfirm, handleSigninSubmit}) => {

        function handleClose(e) {
            let a = e.target.closest('.popup')
            if (a.classList.contains('popup')) {
                closePopup();
            }
        }
        const [isLogin, SetIsLogin] = React.useState(true);
        let title = 'Регистрация';
        let link = 'Войти';
        let button = 'Зарегистрироваться';
        if (isLogin) {
            title = 'Вход';
            button = 'Войти';
            link = 'Зарегистрироваться';
        }
        if (isConfirm) {
            title = 'Пользователь успешно зарегистрирован!';
        }
        function onRegistry() {
            SetIsLogin(!isLogin);
        }

    return (
        <div  className={`popup ${isPopupOpen ? 'popup_opened' : ''}`}>
            <form className="popup__container" method="post" action="#">
                <button onClick={ handleClose } className="button-close popup__button-close" type="button"></button>
                <h2 className="popup__title">{title}</h2>
                {(isConfirm) ? <p onClick={onRegistry} className="popup__login">Войти</p> :
                    <>
                        <label className="popup__label" htmlFor="email">Email</label>
                        <input id="email" className="popup__input" type="email" required placeholder="Введите почту" />
                        <span className="popup__span-error popup__span-error_active">Неправильный формат email</span>
                        <label className="popup__label" htmlFor="password">Пароль</label>
                        <input className="popup__input" id="password" type="password" minLength="8" maxLength="30" required  placeholder="Введите пароль"/>
                        <span className="popup__span-error popup__span-error_active">Неправильный формат пароля</span>
                    </>
                }
                {(isLogin ) ? '' :
                    <>
                        <label className="popup__label" htmlFor="name">Имя</label>
                        <input className="popup__input" id="name" type="text" minLength="2" maxLength="30" pattern="[A-Za-zА-Яа-яЁё -]{2,30}" required placeholder="Введите имя" />
                        <span className="popup__span-error popup__span-error_active">Неправильный формат имени</span>
                    </>
                }
                {(isConfirm) ? '' :
                    <>
                        <span className="popup__span-button popup__span-error_active">Такой пользователь уже есть</span>
                        <button className="popup__button-add popup__button-add_disabled" onClick={handleSigninSubmit} type="submit" >{button}</button>
                        <p className="popup__footer">или<span onClick={onRegistry} className="popup__link">{link}</span></p>
                    </>
                }

            </form>
        </div>
    );
}

export default PopupWithForm;