import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchNews } from "../redux/reducers/news";
import { NewsItem, Loading } from "./index";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  title: {
    marginBottom: '20px'
  }
});

const News = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { isLoading, items } = useSelector(state => state.news);

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchNews())
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading/>
      ) : (
        <>
          {items.length ? (
            <div>
              <h2 className={classes.title}>Новости</h2>
              {
                items.map(item => {
                  return <NewsItem key={item.id} title={item.title} body={item.body}/>
                })
              }
            </div>
          ) : (
            <>Данных нет!</>
          )
          }
        </>
      )
      }
    </div>
  );
};

export default News;
