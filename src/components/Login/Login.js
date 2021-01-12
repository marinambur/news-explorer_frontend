import React from 'react';
import './Login.css';
import {useFormWithValidation} from '../ValidationForm/ValidationForm';

const Login = ({isLoginOpen, isConfirm, handleRegister, onSignin, setLoggedIn, close}) => {

    function handleClose(e) {
        let a = e.target.closest('.popup')
        if (a.classList.contains('popup')) {
            close()
        }
    }

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [user, setUser] = React.useState({email: '', password: ''});
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

    const handleSigninSubmit = (e) => {
        e.preventDefault();
        onSignin({...user})
            .then((res) => {
                close()
                setLoggedIn(true);
                localStorage.setItem('jwt', res.token)
            })
            .catch((err) => {
                err === '400 Bad Request' ?
                    setErrorMessage('Проверьте правильность данных') :
                    err === '409 Conflict' ? setErrorMessage('Такой пользователь уже зарегистрирован') :
                        setErrorMessage('Ошибка');
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


    return (
        <div className={`popup ${isLoginOpen ? 'popup_opened' : ''}`}>
            <form className="popup__container" method="post" action="#">
                <button onClick={handleClose} className="button-close popup__button-close" type="button"></button>
                <h2 className="popup__title">{title}</h2>
                <>
                    <label className="popup__label" htmlFor="email">Email</label>
                    <input onChange={handleChangeEmail}
                           name="email"
                           value={email} id="email" className="popup__input" type="email" required
                           placeholder="Введите почту"/>
                    <span className="popup__span-error popup__span-error_active">{validate.errors.email}</span>
                    <label className="popup__label" htmlFor="password">Пароль</label>
                    <input onChange={handleChangePassword} name="password"
                           value={password} className="popup__input" id="password" type="password" minLength="8"
                           maxLength="30"
                           required placeholder="Введите пароль"/>
                    <span className="popup__span-error popup__span-error_active">{validate.errors.password}</span>
                </>

                <>
                    <span className="popup__span-button popup__span-error_active">{errorMessage}</span>
                    <button className="popup__button-add popup__button-add_disabled" disabled={!validate.isValid}
                            onClick={handleSigninSubmit} type="submit">Войти
                    </button>
                    <p className="popup__footer">или<span onClick={handleRegister}
                                                          className="popup__link">Зарегистрироваться</span></p>
                </>

            </form>
        </div>
    );
}

export default Login;