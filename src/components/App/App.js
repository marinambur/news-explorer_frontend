import React from "react";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import Login from "../Login/Login";
import GoodPopup from "../GoodPopup/GoodPopup";
import Register from "../Register/Register";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import {newsApi} from "../../utils/NewsApi";
import mainApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import Nothing from "../Nothing/Nothing";

function App() {

    const [isGoodPopupOpen, setGoodPopupOpen] = React.useState(false);
    const [isRegisterOpen, setRegisterOpen] = React.useState(false);
    const [isLoginOpen, setLoginOpen] = React.useState(false);
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const [isConfirm, setIsConfirm] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isBadRequest, setBadRequest] = React.useState(false);
    const [articles, setArticles] = React.useState([]);
    const [user, setUser] = React.useState({name: '', email: ''});
    const [saved, setSaved] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [savedArticles, setSavedArticles] = React.useState([]);

    React.useEffect(() => {
        const saved = localStorage.getItem('saved');
        if (saved) {
            setSaved(JSON.parse(saved));
        }
    }, [articles])

    const pushGoodPopup = () => {
        setGoodPopupOpen(true);
    }

    const handleLoading = () => {
        setIsLoading(!isLoading);
    }
    const setLoad = () => {
        setTimeout(handleLoading, 1000)
    }
    const closeRegister = () => {
        setRegisterOpen(!isRegisterOpen);
    }
    const closeAllPopups = () => {
        setLoginOpen(false);
        setRegisterOpen(false);
        setGoodPopupOpen(false);
    }
    const handleForm = () => {
        setLoginOpen(!isLoginOpen);
    }
    const handleRegister = () => {
        setLoginOpen(!isLoginOpen);
        setRegisterOpen(!isRegisterOpen);
    }
    const handleLogin = () => {
        setLoginOpen(true);
    }
    const handleGoodPopup = () => {
        setGoodPopupOpen(true);
    }
    const onEnter = () => {
        closeAllPopups()
        setLoginOpen(true);
    }
    const handleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    function changeLoggedInStatus() {
        setLoggedIn(!loggedIn);
    }

    const handleSearch = () => {
        newsApi.getAllArticles(search)
            .then((data) => {
                setIsLoading(true)
                localStorage.setItem('articles', JSON.stringify(data.articles));
                if (data.articles < 1) {
                    setBadRequest(true)
                } else {
                    setArticles(data.articles);
                    setBadRequest(false)
                }

            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            });

    }

    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        setLoggedIn(!!jwt);
        mainApi.getUserInfo(jwt)
            .then((res) => {
                setUser({
                    email: res.data.email,
                    name: res.data.name
                });
            })
            .catch((err) => console.log(err));
    }, [loggedIn])

    const register = ({email, password, name}) => {
        return mainApi.signup({email, password, name})
    }
    const login = ({email, password}) => {
        return mainApi.signin({email, password})
    }
    const deleteArticleRequest = (jwt, id) => {
        return mainApi.deleteArticle(jwt, id);
    }
    const saveArticleRequest = (jwt, {keyword, title, text, date, source, link, image,}) => {
        return mainApi.saveArticle(jwt, {keyword, title, text, date, source, link, image,})
    }

    return (
        <>
            <CurrentUserContext.Provider value={user}>

                <Switch>
                    <Route exact path="/">
                        <Header loggedIn={loggedIn} handleLoading={setLoad} auth={changeLoggedInStatus}
                                isMenuOpen={isMenuOpen} onMenu={handleMenu} closeMenu={closeMenu}
                                onAddPlace={handleForm} closePopup={handleForm} handleSearch={handleSearch}
                                setSearch={setSearch} isLoginOpen={isLoginOpen} handleLogin ={handleLogin}/>
                        <Register close={closeAllPopups} isGoodPopupOpen={pushGoodPopup} closeRegister={closeRegister}
                                  isRegisterOpen={isRegisterOpen} closePopup={handleForm} onSignup={register}
                                  onEnter={onEnter}/>
                        <GoodPopup onEnter={onEnter} closePopup={handleGoodPopup} isGoodPopupOpen={isGoodPopupOpen}
                                   close={closeAllPopups}/>
                        <Login isLoginOpen={isLoginOpen} closePopup={handleForm} onSignin={login}
                               handleRegister={handleRegister} setLoggedIn={setLoggedIn} close={closeAllPopups}/>
                        {isLoading ? <Preloader/> : ''}
                        {isBadRequest ? <Nothing/> : ''}
                        {articles.length>0 ? <NewsCardList articles={articles} keyword={search} isLoading={isLoading}
                                                           handleLoading={handleLoading} loggedIn={loggedIn}
                                                           setArticles={setArticles} saveArticleRequest={saveArticleRequest}
                                                           isBadRequest={isBadRequest}/> : ''}

                        <About/>

                    </Route>
                    <ProtectedRoute exact path="/saved-news"
                                    component={SavedNewsHeader}
                                    secondComponent={SavedNews}
                                    isMenuOpen={isMenuOpen} onMenu={handleMenu} closeMenu={closeMenu}
                                    auth={changeLoggedInStatus} loggedIn={loggedIn}
                                    saved={savedArticles} setSaved={setSavedArticles} articles={savedArticles}
                                    deleteArticle={deleteArticleRequest} handleLogin = {handleLogin} onAddPlace={handleForm}
                    />
                </Switch>
                <Footer/>
            </CurrentUserContext.Provider>
        </>
    );
}

export default App;
