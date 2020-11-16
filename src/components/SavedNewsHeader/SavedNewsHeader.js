import React from "react";
import './SavedNewsHeader.css';
import { NavLink} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
function SavedNewsHeader({onMenu, isMenuOpen, closeMenu, auth}) {
    const { name } = React.useContext(CurrentUserContext);
    const history = useHistory();
    const [userName, setUserName] = React.useState('');
    React.useEffect(() => {
        setUserName(name);
    }, [name]);
    function logOut () {
        history.push('/');
        auth();
        localStorage.removeItem('jwt');
    }

    return (
        <div className="navigation-news_header">
            <div className="navigation-news">
                <a className="navigation-news__title">News explorer</a>
                <div className="navigation-news__container">
                    <NavLink
                        exact
                        to="/"
                        className="navigation-news__link">Главная</NavLink>
                    <a className="navigation-news__link navigation-news__link_active">Сохранённые&nbsp;статьи</a>

                    <button className="navigation-news__button">
                        <NavLink
                            exact
                            to="/" className="navigation-news__button-text" onClick={logOut}>{userName}</NavLink>
                        <i className="navigation-news__exit exit-icon exit-icon-white"></i>
                    </button>
                    <button className="navigation-news__menu" onClick={onMenu}></button>
                    <div className={`navigation-news__mobile ${isMenuOpen ? 'navigation-news__mobile_open' : ''}`}>
                        <button className="navigation-news__mobile_close-button button-close" onClick={closeMenu}
                                type="button"></button>
                        <a className="navigation-news__title navigation-news__title-mobile">News explorer</a>
                        <a className="navigation-news__link-mobile">Главная</a>
                        <a className="navigation-news__link-mobile">Сохранённые&nbsp;статьи</a>
                        <a className="navigation-news__link-mobile_circle navigation-news__link_circle ">Авторизоваться</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SavedNewsHeader;