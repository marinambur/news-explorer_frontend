import React from "react";
import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
            <div className="footer__container">
                <div className="footer__links">
                    <a className="footer__link">Главная</a>
                    <a className="footer__link">Яндекс.Практикум</a>
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