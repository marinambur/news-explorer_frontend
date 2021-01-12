import React from "react";
import './NewsCard.css';

function NewsCard(props) {
    const [id, setId] = React.useState('');
    const [blue, setblue] = React.useState(false);

    function setCardBlue() {
        setblue(true);
    }
    const saveArticle = () => {
        const jwt = localStorage.getItem('jwt');
        props.saveArticleRequest(jwt, {
            keyword: props.keyword, title: props.title, text: props.text, date: props.date,
            source: props.source, link: props.data.url, image: props.image
        })
            .then((res) => {
                setId(res.data._id)
                props.saveNews((myNews) => {
                    localStorage.setItem('saved', JSON.stringify([...myNews, res.data]));
                    return [...myNews, res.data]
                });
                setCardBlue()
            })
            .catch(err => console.log(err));
    }
    React.useEffect(() => {
        const savedArticle = JSON.parse(localStorage.getItem('saved'));
        if (!savedArticle) return;
        if (savedArticle.find(item => item.title === props.title)) {
            setCardBlue()
        }
    }, [])
    const changeDate = (date) => {
        const postDate = new Date(date);
        const changeDate = `${postDate.toLocaleString("ru-RU", {
            month: 'long',
            day: 'numeric'
        })}, ${postDate.getFullYear()}`;
        return changeDate;
    }
    return (
        <div className="card">
            <div className="card__buttons">
                {props.loggedIn ? <button onClick={saveArticle}
                                          className={`news-card__button card__bookmark ${blue ? 'newscard__icon_marked' : ''}`}></button> :
                    <button className="tooltip">Войдите чтобы сохранить статьи</button>
                    }
            </div>
            <a className="card__href" href={props.card.url} rel="noreferrer noopener" target="_blank">
            <img data-name="" className="card__item" src={props.card.urlToImage} alt="Картинка новости"/>
            <div className="news-card__text-box">
                <div className="card__text">
                    <p className="card__date">{changeDate(props.card.publishedAt)}</p>
                    <h3 className="card__header">{props.card.title}</h3>
                    <p className="card__article">{props.card.description}</p>
                    <p className="card__source">{props.card.source.name}</p>
                </div>
            </div>
  </a></div>
    );
}

export default NewsCard;