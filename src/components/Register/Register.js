
import React from 'react';
import './Register.css';
import {useFormWithValidation} from '../ValidationForm/ValidationForm';
const Register = ({ onEnter, closeRegister, close, isConfirm,  isRegisterOpen, onSignup, isGoodPopupOpen}) => {

    function handleClose(e) {
        let a = e.target.closest('.popup')
        if (a.classList.contains('popup')) {
            //validate.resetForm();
            close()
        }
    }
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [user, setUser] = React.useState({name: '', email: '', password: ''});
    const [errorMessage, setErrorMessage] = React.useState('');
    const validate = useFormWithValidation();

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        validate.handleChange(e);
        setUser({
            ...user,
            email: e.target.value,
        })
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
        validate.handleChange(e);
        setUser({
            ...user,
            password: e.target.value,
        })
    }
    function handleChangeName(e) {
        setUser({
            ...user,
            name: e.target.value
        })
        setName(e.target.value);
    }


    const handleSignupSubmit = (e) => {
        e.preventDefault();
        onSignup({...user})
    .then((res) => {
            close()
        //setErrorMessage('');
        isGoodPopupOpen();
       //validate.resetForm();
            console.log(res);
        })
            .catch((err) => {
                err === '400 Bad Request' ? setErrorMessage('Неверные данные') : err === '409 Conflict' ? setErrorMessage('Такой пользователь зарегистрирован') : setErrorMessage('Произошла ошибка');

            })
    }
    const [isLogin, SetIsLogin] = React.useState(true);
    let title = 'Регистрация';
    let link = 'Войти';
    let button = 'Зарегистрироваться';
    if (isLogin) {
        title = 'Вход';
        button = 'Войти';
        link = 'Зарегистрироваться';
    }
    if (isConfirm) {
        title = 'Пользователь успешно зарегистрирован!';
    }
    function onRegistry() {
        SetIsLogin(!isLogin);
    }


    return (

        <div  className={`popup ${isRegisterOpen ? 'popup_opened' : ''}`}>
            <form className="popup__container" method="post" action="#">
                <button onClick={ handleClose } className="button-close popup__button-close" type="button"></button>
                <h2 className="popup__title">Регистрация</h2>
                    <>
                        <label className="popup__label" htmlFor="email">Email</label>
                        <input onChange={handleChangeEmail}


                               name="email"
                               value={email}

                               id="email1" className="popup__input" type="email" required placeholder="Введите почту" />
                        <span className="popup__span-error popup__span-error_active">{validate.errors.email}</span>
                        <label className="popup__label" htmlFor="password">Пароль</label>
                        <input className="popup__input"  onChange={handleChangePassword} name="password"
                               value={password} id="password1" type="password" minLength="8" maxLength="30" required  placeholder="Введите пароль"/>
                        <span className="popup__span-error popup__span-error_active">{validate.errors.password}</span>
                        <label className="popup__label" htmlFor="name">Имя</label>
                        <input className="popup__input" id="name" type="text" minLength="2" maxLength="30"
                               onChange={handleChangeName} name="name" value={name} pattern="[A-Za-zА-Яа-яЁё -]{2,30}" required placeholder="Введите имя" />
                        <span className="popup__span-error popup__span-error_active"></span>
                        <span className="popup__span-button popup__span-error_active">{errorMessage}</span>
                        <button className="popup__button-add popup__button-add_disabled" onClick={handleSignupSubmit} type="submit" >Зарегистрироваться</button>
                        <p className="popup__footer">или<span onClick={onEnter} className="popup__link">Войти</span></p>
                    </>

            </form>
        </div>
    );
}

export default Register;