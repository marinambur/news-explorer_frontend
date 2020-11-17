import React from "react";
import './NewsCard.css';

function NewsCard(props) {
    const [id, setId] = React.useState('');
    const saveArticle = () => {
        const jwt = localStorage.getItem('jwt');
        props.saveArticleRequest(jwt, {keyword: props.keyword, title: props.title, text: props.text, date: props.date,
            source: props.source, link: props.data.url, image: props.image })
            .then((res) => {
                console.log(res, 'savedinApi')
                 setId(res._id);
                props.saveNews((myNews) => {
                    console.log(myNews)
                    localStorage.setItem('saved', JSON.stringify([...myNews, props.data.id]));
                    return [...myNews, props.data.id]
                });
            })
            .catch(err => console.log(err));
    }
    const changeDate = (date) => {
        const postDate = new Date(date);
        const changeDate = `${postDate.toLocaleString("ru-RU", { month: 'long', day: 'numeric' })}, ${postDate.getFullYear()}`;
        return changeDate;
    }
    return (
        <div className="card">
            <div className="card__buttons">
                {props.loggedIn ?  <button onClick={saveArticle} className="news-card__button card__bookmark"></button> : <button onClick={saveArticle} disabled={true} className="news-card__button card__bookmark">
                </button>}
            </div>
            <button className="card__login news-card__delete">Войдите чтобы сохранить статьи</button>
            <img data-name="" className="card__item" src={props.card.urlToImage} alt="Картинка новости"/>
            <div className="news-card__text-box">
                <div className="card__text">
                    <p className="card__date">{changeDate(props.card.publishedAt)}</p>
                    <h3 className="card__header">{props.card.title}</h3>
                    <p className="card__article">{props.card.description}</p>
                    <p className="card__source">{props.card.source.name}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;