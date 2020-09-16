import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/reducers/auth";

const NavBar = () => {
  const dispath = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  const logout = () => {
    dispath(setAuth(false));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">На главную</Link>
        </li>
        <li>
          <Link to="/news">Новости</Link>
        </li>
        <li>
          {isAuth ? (
            <>
              <Link to="/profile">Профиль</Link>
              <button onClick={logout}>Выйти</button>
            </>
          ) : (
            <Link to="/login">Войти</Link>
          )
          }
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
