import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function App() {

    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const [isConfirm, setIsConfirm] = React.useState(false);

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

    return (
        <>
            <Switch>
            <Route exact path="/">
                <Header isMenuOpen={isMenuOpen} onMenu = {handleMenu} closeMenu = {closeMenu} onAddPlace = {handleForm} closePopup={handleForm} />
                <PopupWithForm isPopupOpen={isPopupOpen} closePopup={handleForm}/>
                <NewsCardList/>
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
