import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
    return (
        <section className="news">
            <div className="news__box">
                <h1 className="news__header">Результаты поиска</h1>
                <div className="news__grid">
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                </div>
                <button className="news__button button">Показать еще</button>
            </div>
        </section>
    );
}

export default NewsCardList;