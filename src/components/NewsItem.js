import React from 'react';

const NewsItem = ({title, body}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default NewsItem;
