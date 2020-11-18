import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";



function NewsCardList(props) {
    const [quantity, setQuantity] = React.useState(3);

    const moreArticles = () => {
        setQuantity(quantity + 3);
    }

    const [saved, setSaved] = React.useState([]);
    React.useEffect(() => {
        const saved = localStorage.getItem('saved');
        if (saved) {
            setSaved(JSON.parse(saved));
        }
    }, [props.saved])
    return (
        <section className="news">
            <div className="news__box">
                <h1 className="news__header">Результаты поиска</h1>


                <div className="news__grid">
                    {props.articles !== undefined ? props.articles.slice(0, quantity).map((card) => ( card !== undefined ?

                        <NewsCard key={Math.random()}  data={card}  id={card.id}
                                  loggedIn={props.loggedIn} saveNews={setSaved} image={card.urlToImage} date={card.publishedAt} title={card.title}
                                  text={card.description} source={card.source.name}
                                  card={card} saveArticleRequest={props.saveArticleRequest} saved = {props.saved} keyword = {props.keyword} mark = {props.mark} setCardMarked = {props.setCardMarked}

                        /> : ''
                    )) : 'notfound'}
                </div>
                {props.articles.length>0 ? <button onClick={moreArticles} className="news__button button ">Показать еще</button> : <button onClick={moreArticles} className="news__button button  hidden">Показать еще</button>}

            </div>
        </section>
    );
}

export default NewsCardList;