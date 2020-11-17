import React from "react";
import Nothing from "../Nothing/Nothing";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
function Results(props) {

    return (
       <>
           {props.articles.length>0 ? <NewsCardList articles={props.articles} keyword={props.search} isLoading={props.isLoading}
                                                    handleLoading={props.handleLoading} loggedIn={props.loggedIn}
                                                    setArticles={props.setArticles} saveArticleRequest={props.saveArticleRequest}
                                                    mark = {props.mark} setCardMarked = {props.setCardMarked}
                                                    isBadRequest={props.isBadRequest}/> : ''}
           {props.isLoading ? <Preloader/> : ''}
           {props.isBadRequest ? <Nothing/> : ''}


       </>
    )
}

export default Results;