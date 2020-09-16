import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchNews } from "../redux/reducers/news";
import { NewsItem, Loading } from "./index";

const News = () => {
  const dispatch = useDispatch();
  const { isLoading, items: news } = useSelector(state => state.news);

  React.useEffect(() => {
    dispatch(fetchNews())
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading/>
      ) : (
        <>
          {news.length ? (
            news.map(item => {
              return <NewsItem key={item.id} title={item.title} body={item.body}/>
            })
          ) : (
            <div>Данных нет!</div>
          )
          }
        </>
      )
      }
    </div>
  );
};

export default News;
