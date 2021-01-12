import React from "react";

import './SavedNewsCard.css';

function SavedNewsCard(props) {
    const [id, setId] = React.useState('');
    const deleteArticle = (id) => {
        const jwt = localStorage.getItem('jwt');
        props.delete(jwt, id)
            .then((res) => {
                let result = props.savedNews.filter(item => item._id !== id);
                props.saveNews(result)
                localStorage.removeItem('saved');
                localStorage.setItem('saved', JSON.stringify(result));
            })
            .catch(err => console.log(err))
    }
    const changeDate = (date) => {
        const postDate = new Date(date);
        const changeDate = `${postDate.toLocaleString("ru-RU", {
            month: 'long',
            day: 'numeric'
        })}, ${postDate.getFullYear()}`;
        return changeDate;
    }
    return (
        <div id={id} className="saved_news-card">
            <div className="saved_news-card__buttons">
                <button className="saved_news-card__tag">{props.keyword}</button>
                <button className="saved_news-card__delete">Убрать из сохраненных</button>
                <button onClick={() => deleteArticle(props.id)} className="saved_news-card__button saved_news-card__trash">
                </button>
            </div>
            <a className="saved_card__href" href={props.link} rel="noreferrer noopener" target="_blank">
            <img data-name="" className="saved_card__item" src={props.pic} alt="Картинка сохраненной новости"/>
            <div className="saved_news-card__text-box">
                <div className="saved_news-card__text">
                    <p className="saved_news-card__date">{changeDate(props.date)}</p>
                    <h3 className="saved_news-card__header">{props.title}</h3>
                    <p className="saved_news-card__article">{props.text}</p>
                    <p className="saved_news-card__source">{props.source}</p>
                </div>
            </div>
            </a>
        </div>
    );
}

export default SavedNewsCard;