import React from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    marginBottom: '20px',
    borderBottom: '1px solid #dedede'
  },
  title: {
    marginBottom: '10px'
  },
  body: {
    padding: '10px'
  }
});

const NewsItem = ({title, body}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.body}>{body}</p>
    </div>
  );
};

export default NewsItem;
