import React from "react";
import pic from '../../images/image_08.jpg';

import './NewsCard.css';
function NewsCard() {
    return (
        <div className="card">
            <div className="card__buttons">
                <button className="news-card__button card__bookmark">
                </button>
            </div>
            <img data-name="" className="card__item" src={pic}/>
            <div className="card__text">
                <p className="card__date">2 августа, 2019</p>
                <h3 className="card__header">Национальное достояние – парки</h3>
                <p className="card__article">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
                    складываться система национальных парков – охраняемых территорий, где и сегодня каждый может
                    приобщиться к природе.</p>
                <p className="card__source">ЛЕНТА.РУ</p>
            </div>
        </div>
    );
}

export default NewsCard;