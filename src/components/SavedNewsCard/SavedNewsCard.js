import React from "react";

import './SavedNewsCard.css';

function SavedNewsCard(props) {
    console.log(props, 'props')
    const [id, setId] = React.useState('');
    const deleteArticle = (id) => {
        const jwt = localStorage.getItem('jwt');
        props.delete(jwt, id)
            .then((res) => {
                console.log(res);
                console.log(id)
                props.saveNews((prev) => {
                    console.log('yoyo')
                    console.log(prev)
                    console.log(id)
                    const result = prev.filter(item => item !== props.title);
                    localStorage.removeItem('saved');
                    localStorage.setItem('saved', JSON.stringify(result));
                    return result;
                })

            })
            .catch(err => console.log(err))
    }
    const changeDate = (date) => {
        const postDate = new Date(date);
        const changeDate = `${postDate.toLocaleString("ru-RU", { month: 'long', day: 'numeric' })}, ${postDate.getFullYear()}`;
        return changeDate;
    }
    return (
        <div id={id} className="news-card">
            <div className="news-card__buttons">
                <button className="news-card__tag">{props.keyword}</button>
                <button className="news-card__delete">Убрать из сохраненных</button>
                <button onClick={() => deleteArticle(props.id)} className="news-card__button news-card__trash">
                </button>
            </div>

            <img data-name="" className="card__item" src={props.pic} alt="Картинка сохраненной новости"/>
            <div className="news-card__text-box">
                <div className="news-card__text">
                    <p className="news-card__date">{changeDate(props.date)}</p>
                    <h3 className="news-card__header">{props.title}</h3>
                    <p className="news-card__article">{props.text}</p>
                    <p className="news-card__source">{props.source}</p>
                </div>
            </div>
        </div>
    );
}

export default SavedNewsCard;