import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";


function NewsCardList(props) {
    const [quantity, setQuantity] = React.useState([3]);
    const moreArticles = () => {
        setQuantity(quantity + 3);
    }
    return (
        <section className="news">
            <div className="news__box">
                <h1 className="news__header">Результаты поиска</h1>
                <div className="news__grid">
                    {props.articles !== undefined ? props.articles.slice(0, quantity).map((card) => ( card !== undefined ?
                        <NewsCard key={Math.random()} card={card}  /> : ''
                    )) : ''}
                </div>
                <button onClick={moreArticles} className="news__button button">Показать еще</button>
            </div>
        </section>
    );
}

export default NewsCardList;