import React from "react";
import './SavedNews.css';
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import MainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNews(props) {
    const { name } = React.useContext(CurrentUserContext);
    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        MainApi.showArticles(jwt)
            .then(res =>
                props.setSaved(res)
            )
            .catch(err => console.log(err))
    }, [])
    const [ keywords, setKeywords ] = React.useState([]);
    React.useEffect(() => {
        setKeywords(props.articles.map(myArticle => myArticle.keyword[0].toUpperCase() + myArticle.keyword.slice(1)));
    }, [props.articles])

    console.log(props.saved)
    return (
        <>
            <section className="savednews">
                <div className="savednews__box">
                    <p className="card__date">Сохранённые статьи</p>
                    <h3 className="card__header">{`${name}, у вас ${props.articles.length} сохраненных статей`}</h3>
                    <p className="card__article">По ключевым словам: <span
                        className="card__article_span">{keywords}</span> и <span className="card__article_span"> другим</span>
                    </p>
                </div>
                <div className="news__container">
                    <div className="news__grid">
                        {props.saved.map(myArticle => <SavedNewsCard saved={true} key={myArticle._id} id={myArticle._id} loggedIn={props.loggedIn}
                                                         keyword={myArticle.keyword} pic={myArticle.image} date={myArticle.date}
                                                         title={myArticle.title} text={myArticle.text} source={myArticle.source} delete={props.deleteArticle}
                                                         />)}
                    </div>
                </div>
            </section>

        </>
    );
}

export default SavedNews;