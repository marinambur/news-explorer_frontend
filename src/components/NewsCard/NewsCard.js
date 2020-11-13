import React from "react";
import pic from '../../images/image_08.jpg';

import './NewsCard.css';

function NewsCard(props) {
    console.log(props.card.title)
    return (
        <div className="card">
            <div className="card__buttons">
                <button className="news-card__button card__bookmark">
                </button>
            </div>
            <img data-name="" className="card__item" src={props.card.urlToImage} alt="Картинка новости"/>
            <div className="news-card__text-box">
                <div className="card__text">
                    <p className="card__date">{props.card.publishedAt}</p>
                    <h3 className="card__header">{props.card.title}</h3>
                    <p className="card__article">{props.card.description}</p>
                    <p className="card__source">{props.card.source.name}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;