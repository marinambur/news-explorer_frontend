import React from "react";
import './SearchResults.css';
import Preloader from "../Preloader/Preloader";
import Nothing from "../Nothing/Nothing";
import NewsCard from "../NewsCard/NewsCard";
function SearchForm(props) {
    const [quantity, setQuantity] = React.useState([3]);
    const [saved, setSaved] = React.useState([]);

    React.useEffect(() => {
        const saved = localStorage.getItem('saved');
        console.log('saved', saved)
        if (saved) {
            setSaved(JSON.parse(saved));
        }
    }, [props.articles])
    const moreArticles = () => {
        setQuantity(quantity + 3);
    }
    console.log(props.articles)
    return (
        <div className="news__box">
            <h1 className="news__header">Результаты поиска</h1>


            <div className="news__grid">
                {props.articles !== undefined ? props.articles.slice(0, quantity).map((card) => ( card !== undefined ?

                        <NewsCard key={Math.random()}    id={card.id} card={card}
                                  loggedIn={props.loggedIn} saveNews={props.setSaved} image={card.urlToImage} date={card.publishedAt} title={card.title}

                                  card={props.card} saveArticleRequest={props.saveArticleRequest} keyword = {props.keyword}

                        /> : ''
                )) : 'notfound'}
            </div>

            <button onClick={moreArticles} className="news__button button">Показать еще</button>
        </div>
    );
}

export default SearchForm;