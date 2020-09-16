import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuth } from "../redux/reducers/auth";
import localStorageService from "../utils/localStorageService";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh'
  },
  form: {
    width: '400px',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: '10px 20px',
    marginBottom: '20px'
  },
  button: {
    width: '100%',
    padding: '10px 20px',
  },
  err: {
    color: 'red',
    marginBottom: '10px'
  }
});

const Login = () => {
  let history = useHistory();
  const classes = useStyles();
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
    <div className={classes.root}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input className={classes.input}
               type="text"
               placeholder="Логин"
               onChange={changeHandler('login')}
               value={login}
        />
        <input className={classes.input}
               type="password"
               placeholder="Пароль"
               onChange={changeHandler('password')}
               value={password}
        />
        { formError && (
          <p className={classes.err}>{ formError }</p>
        )
        }
        <button className={classes.button} type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
