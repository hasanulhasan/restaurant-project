import React from 'react';
import dateFormat from 'dateformat';
import { CardText } from 'reactstrap';

const LoadComment = (props) => {
  return (
    props.comments.map(comment => {
      return (
        <div key={comment.id} style={{ padding: '5px' }}>
          <h3>{comment.id}</h3>
          <CardText>{comment.comment}</CardText>
          <CardText>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</CardText>
        </div >
      );
    })
  );
};

export default LoadComment;