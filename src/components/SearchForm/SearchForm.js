import React from "react";
import './SearchForm.css';
function SearchForm() {
    return (
        <div className="search-form__search">
            <input className="search-form__input" placeholder="Введите тему новости" required type="search"/>
            <input className="search-form__button button" type="submit" value="Искать"/>
        </div>
    );
}

export default SearchForm;