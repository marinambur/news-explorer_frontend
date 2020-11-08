import React from "react";
import './SavedNews.css';
import pic1 from '../../images/image_06.jpg';
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";

function SavedNews() {
    return (
        <>
            <section className="savednews">
                <div className="savednews__box">
                    <p className="card__date">Сохранённые статьи</p>
                    <h3 className="card__header">Грета, у вас 5 сохранённых статей</h3>
                    <p className="card__article">По ключевым словам: <span className="card__article_span">Природа, Тайга</span> и <span className="card__article_span">2-м другим</span></p>
                </div>
                <div className="news__grid">
                    <SavedNewsCard pic = {pic1}/>
                    <SavedNewsCard pic = {pic1}/>
                    <SavedNewsCard pic = {pic1}/>
                    <SavedNewsCard pic = {pic1}/>
                    <SavedNewsCard pic = {pic1}/>
                </div>
            </section>

        </>
    );
}

export default SavedNews;