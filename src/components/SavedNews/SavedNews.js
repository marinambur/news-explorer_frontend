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
        setKeywords(sortByFrequency(props.saved.map(article => article.keyword[0].toUpperCase() + article.keyword.slice(1))));
    }, [props.saved])

    const sortByFrequency = (arr) => {
        const frequency = {};
        arr.forEach((item) => frequency[item] = 0);
        const uniques = arr.filter((item) => ++frequency[item] === 1);
        return uniques.sort((a, b) => frequency[b] - frequency[a]);
    }

    function declOfNum(number, titles) {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }
    const savedText = declOfNum(props.saved.length, ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);
    return (
        <>
            <section className="savednews">
                <div className="savednews__box">
                    <p className="card__date">Сохранённые статьи</p>
                    <h3 className="card__header">{`${name}, у вас ${props.saved.length} ${savedText}`}</h3>
                    <p className="card__article">По ключевым словам: <span
                        className="card__article_span">{keywords.length > 3 ? `${keywords[0]}, ${keywords[1]} и ${keywords.length - 2}-м другим` : `${keywords.join(', ')}`}</span>
                    </p>
                </div>
                <div className="news__container">
                    <div className="news__grid">
                        {props.saved.map(myArticle => <SavedNewsCard saved={true} savedNews = {props.saved} saveNews={props.setSaved} key={myArticle._id} id={myArticle._id} loggedIn={props.loggedIn}
                                                         keyword={myArticle.keyword} pic={myArticle.image} date={myArticle.date} link = {myArticle.link}
                                                         title={myArticle.title} text={myArticle.text} source={myArticle.source} delete={props.deleteArticle}
                                                         />)}
                    </div>
                </div>
            </section>

        </>
    );
}

export default SavedNews;