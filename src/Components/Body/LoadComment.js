import React from 'react';
import dateFormat from 'dateformat';
import { CardText } from 'reactstrap';
import Loading from './Loading';

const LoadComment = (props) => {
  if (props.commentIsLoading) {
    return <Loading></Loading>
  }
  console.log(props.comments)
  return (
    props.comments.map(comment => {
      return (
        <div key={comment.id} style={{ padding: '5px' }}>
          <h2>{comment.author}</h2>
          <h3>{comment.id}</h3>
          <CardText>{comment.comment}</CardText>
          <CardText>Rating: {comment.rating}</CardText>
          <CardText>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</CardText>
        </div >
      );
    })
  );
};

export default LoadComment;