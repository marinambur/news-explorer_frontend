import React from "react";
import './Navigation.css';
import { useHistory, NavLink } from 'react-router-dom';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Navigation({ onAddPlace, isOpen, onMenu, isMenuOpen, closeMenu, loggedIn, auth, isLoginOpen, handleLogin }) {
    const { name } = React.useContext(CurrentUserContext);
    const [userName, setUserName] = React.useState('');
    const history = useHistory();
    React.useEffect(() => {
        setUserName(name);
    }, [name]);
    function logOut () {
        auth();
        localStorage.removeItem('jwt');
        handleLogin()
    }

    return (
        <div className="navigation__header">
        <nav className={`navigation ${(isOpen) ? 'navigation_opened' : ''}`}>
            <a className="navigation__title">News explorer</a>
            <div className="navigation__container">
                <a className="navigation__link navigation__link_active">Главная</a>
                {loggedIn ?  <><NavLink
                                        to="/saved-news" className="navigation-news__link_white  navigation-news__link_active-white ">Сохранённые&nbsp;статьи</NavLink><button className="navigation-news__button">
                    <p onClick={logOut} className="navigation-news__button-text-white">{userName}</p>
                    <i className="navigation-news__exit exit-icon_white exit-icon-white"></i>
                </button></> : <a className=" navigation__link_circle" onClick={onAddPlace}>Авторизоваться</a>}

                <button className="navigation__menu_mobile" onClick={onMenu}></button>
                <div className={`navigation-news__mobile ${isMenuOpen ? 'navigation-news__mobile_open' : ''}`}>
                    <button className="navigation-news__mobile_close-button button-close" onClick={closeMenu}
                            type="button"></button>
                    <a className="navigation-news__title navigation-news__title-mobile">News explorer</a>
                    <NavLink
                        to="/" className="navigation-news__link-mobile">Главная</NavLink>
                    {loggedIn ? <NavLink
                        to="/saved-news" className="navigation-news__link-mobile">Сохранённые&nbsp;статьи</NavLink> : ''}
                    {loggedIn ? <p onClick={logOut} className="navigation-news__link-mobile">Выйти</p> : <a className="navigation-news__link-mobile_circle navigation-news__link_circle " onClick={onAddPlace}>Авторизоваться</a>}
                </div>
            </div>

        </nav>
        </div>
    );
}

export default Navigation;