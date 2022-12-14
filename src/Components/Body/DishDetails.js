import React from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';

const DishDetails = (props) => {
  return (
    <div>
      <Card style={{ marginTop: '10px' }}>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: 'left' }}></CardBody>
        <CardText style={{ padding: '10px' }}>
          <h4>{props.dish.name}</h4>
          <p>{props.dish.description}</p>
          <p>Price: ${props.dish.price}</p>
        </CardText>

      </Card>

    </div>
  );
};

export default DishDetails;