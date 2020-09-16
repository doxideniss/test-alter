import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/reducers/auth";
import localStorageService from "../utils/localStorageService";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formError, setFormError] = React.useState('');

  const changeHandler = name => e => {
    const value = e.target.value;
    if (name === 'login') {
      setLogin(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (login === 'Admin' && password === '12345') {
      dispatch(setAuth(true));
      localStorageService.login();
      history.push('/profile');
    } else {
      setFormError('Имя пользователя или пароль введены неверно');
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text"
               placeholder="Логин"
               onChange={changeHandler('login')}
               value={login}
        />
        <input type="password"
               placeholder="Пароль"
               onChange={changeHandler('password')}
               value={password}
        />
        { formError && (
          <p>{ formError }</p>
        )
        }
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
