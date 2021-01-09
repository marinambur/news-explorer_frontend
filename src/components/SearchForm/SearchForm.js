import React from "react";
import './SearchForm.css';
function SearchForm(props) {
    const handleSearchInput = (e) => {
        props.setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearch();

    }
    return (
        <div className="search-form__search">
            <input className="search-form__input" onChange={handleSearchInput} placeholder="Введите тему новости" required type="search"/>
            <input className="search-form__button button" onClick={handleSubmit} type="submit" value="Искать"/>
        </div>
    );
}

export default SearchForm;