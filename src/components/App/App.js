import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import {newsApi} from "../../utils/NewsApi";
import {getToken, register} from "../../utils/auth";
import {authorize} from "../../utils/auth";

function App() {

    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const [isConfirm, setIsConfirm] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [articles, setArticles] = React.useState([]);
    // const handleSigninSubmit = (email, password) => {
    //     authorize(email, password)
    //         .then(data => {
    //             console.log(data)
    //             // if (data.token) {
    //             //     localStorage.setItem('token', data.token);
    //             //     setEmail('');
    //             //     setPassword('');
    //             //     handleLogin();
    //             //     tokenCheck();
    //             //     history.push('/cards');
    //             // } else {
    //             //     throw new Error('Ошибка сервера: не удалось получить токен');
    //             // }
    //         })
    //         .catch(err => {
    //             console.log(alert(`Ошибка авторизации: ${err}. Проверьте корректность данных в полях Email и Пароль`))
    //         })
    // }

    const handleSigninSubmit = () => {
        console.log('auth')
    }

    const handleConfirm = () => {
        setIsConfirm(isConfirm);
    }

    const handleForm = () => {
        setPopupOpen(!isPopupOpen);
    }

    const handleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    const handleSearch = () => {
        newsApi.getAllArticles(search)
            .then((data) => {
                console.log(data);
                //setIsLoading(true)
                //localStorage.setItem('articles', JSON.stringify(data.articles));
                setArticles(data.articles);
            })
            .catch(err => console.log(err))
            //.finally(() => {
               // setIsLoading(false)});

    }


    return (
        <>
            <Switch>
            <Route exact path="/">
                <Header isMenuOpen={isMenuOpen} onMenu = {handleMenu} closeMenu = {closeMenu} onAddPlace = {handleForm} closePopup={handleForm} handleSearch={handleSearch} setSearch={setSearch}/>
                <PopupWithForm isPopupOpen={isPopupOpen} handleSigninSubmit = {handleSigninSubmit} closePopup={handleForm}/>
                <NewsCardList articles={articles}
                              setArticles={setArticles}/>
                <About/>
                <Preloader/>

            </Route>
            <Route path="/saved-news">
                <SavedNewsHeader isMenuOpen={isMenuOpen} onMenu = {handleMenu} closeMenu = {closeMenu}/>
                <SavedNews/>
            </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
