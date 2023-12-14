import React, { useContext } from 'react';
import Inputs from '../components/UI/MyInput/Inputs';
import Buttons from '../components/UI/MyButton/Buttons';
import { AuthContext } from '../context/context';

const Login = () => {

    const {setAuth} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()
        setAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <>
            <div>
                <h1>Страница для логина</h1>
                <form onSubmit={login} >
                    <Inputs type="text" placeholder='Введите логин' />
                    <Inputs type='password' placeholder='Введите пароль' />
                    <Buttons >Войти</Buttons>
                </form>
            </div>    
        </>
    );
};

export default Login;