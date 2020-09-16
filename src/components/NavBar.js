import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/reducers/auth";
import localStorageService from "../utils/localStorageService";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#3498db',
    color: '#fff'
  },
  logo: {
    fontSize: '24px'
  },
  menuList: {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  menuItem: {
    margin: '0',
    padding: '10px 5px',
    marginLeft: '20px',
    cursor: 'pointer'
  },
  menuLink: {
    textDecoration: 'none',
    color: '#fff'
  }
});

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  const logout = () => {
    localStorageService.logout();
    dispatch(setAuth(false));
  };

  return (
    <nav className={classes.root}>
      <div className={classes.logo}>Logo</div>
      <ul className={classes.menuList}>
        <li className={classes.menuItem}>
          <Link className={classes.menuLink} to="/">На главную</Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.menuLink} to="/news">Новости</Link>
        </li>
        {isAuth ? (
          <>
            <li className={classes.menuItem}>
              <Link className={classes.menuLink} to="/profile">Профиль</Link>
            </li>
            <li className={classes.menuItem} onClick={logout}>
              Выйти
            </li>
          </>
        ) : (
          <li className={classes.menuItem}>
            <Link className={classes.menuLink}  to="/login">Войти</Link>
          </li>
        )
        }
      </ul>
    </nav>
  );
};

export default NavBar;
