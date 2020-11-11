import React from "react";
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

function Header({onAddPlace, isMenuOpen,  onMenu, closeMenu }) {
    return (
        <header className="header">
            <Navigation onAddPlace={onAddPlace} closeMenu={closeMenu} isMenuOpen={isMenuOpen} onMenu={onMenu}/>
            <div className="header__text">
                <h1 className="header__title">Что творится в мире?</h1>
                <p className="header__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном
                    кабинете.</p>
                <SearchForm/>
            </div>
        </header>
    );
}

export default Header;