import React from "react";

import './SavedNewsCard.css';

function SavedNewsCard(props) {
    return (
        <div className="news-card">
            <div className="news-card__buttons">
                <button className="news-card__tag">Природа</button>
                <button className="news-card__delete">Убрать из сохраненных</button>
                <button className="news-card__button news-card__trash">
                </button>
            </div>

            <img data-name="" className="card__item" src={props.pic} alt="Картинка сохраненной новости"/>
            <div className="news-card__text-box">
                <div className="news-card__text">
                    <p className="news-card__date">2 августа, 2019</p>
                    <h3 className="news-card__header">Национальное достояние – парки</h3>
                    <p className="news-card__article">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь
                        начала
                        складываться система национальных парков – охраняемых территорий, где и сегодня каждый может
                        приобщиться к природе.</p>
                    <p className="news-card__source">ЛЕНТА.РУ</p>
                </div>
            </div>
        </div>
    );
}

export default SavedNewsCard;