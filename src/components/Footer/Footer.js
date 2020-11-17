import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
            <div className="footer__container">
                <div className="footer__links">
                    <Link to="/" className='footer__link'>Главная</Link>
                    <a className="footer__link" href="https://praktikum.yandex.ru/web" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                </div>
                <div className="footer__social">
                    <a className="footer__icons github" href="https://github.com/marinambur" target="_blank" rel="noopener noreferrer"> </a>
                    <a className="footer__icons facebook" href="https://www.facebook.com/marinadentistry" target="_blank" rel="noopener noreferrer"> </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;