import React from "react";
import './Navigation.css';
function Navigation({ onAddPlace, isOpen, onMenu, isMenuOpen, closeMenu }) {


    return (
        <div className="navigation__header">
        <nav className={`navigation ${(isOpen) ? 'navigation_opened' : ''}`}>
            <a className="navigation__title">News explorer</a>
            <div className="navigation__container">
                <a className="navigation__link navigation__link_active">Главная</a>
                <a className=" navigation__link_circle" onClick={onAddPlace}>Авторизоваться</a>
                <button className="navigation__menu_mobile" onClick={onMenu}></button>
                <div className={`navigation-news__mobile ${isMenuOpen ? 'navigation-news__mobile_open' : ''}`}>
                    <button className="navigation-news__mobile_close-button button-close" onClick={closeMenu}
                            type="button"></button>
                    <a className="navigation-news__title navigation-news__title-mobile">News explorer</a>
                    <a className="navigation-news__link-mobile">Главная</a>
                    <a className="navigation-news__link-mobile">Сохранённые&nbsp;статьи</a>
                    <a className="navigation-news__link-mobile_circle navigation-news__link_circle ">Авторизоваться</a>
                </div>
            </div>

        </nav>
        </div>
    );
}

export default Navigation;