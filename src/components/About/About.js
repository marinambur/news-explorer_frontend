import React from "react";
import './About.css';
import pic from '../../images/image-03.jpg';

function About() {
    return (
        <div className="about">
            <img className="about__picture" src={pic} alt="Фото автора"/>
            <div className="about__text">
                <h3 className="about__title">Об авторе</h3>
                <p className="about__subtitle">Меня зовут Марина Кузнецова, я frontend-разработчик.</p>

                <p className="about__subtitle">Данный сайт выполнен на React, с использованием NewsAPI. Бэк на NodeJs
                    (express), MongoDB.</p>
                <p className="about__subtitle">Бэк на NodeJs
                    (express), MongoDB.</p>
                <p className="about__subtitle">Код на github: <a
                    href="https://github.com/marinambur/news-explorer_frontend" target="_blank"
                    rel="noopener noreferrer">фронт</a> и <a href="https://github.com/marinambur/news-explorer-api"
                                                             target="_blank" rel="noopener noreferrer">бэк</a>.</p>

                <p className="about__subtitle">По всем вопросам можете писать @kuzmarina (Telegram)</p>
            </div>
        </div>
    );
}

export default About;