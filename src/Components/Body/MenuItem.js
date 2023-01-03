import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

const MenuItem = (props) => {
  // console.log(props);
  return (
    <div>
      <Card style={{ margin: '10px' }}>
        <CardBody>
          <CardImg
            width='100%'
            alt={props.dish.name}
            src={baseUrl + props.dish.image}
            style={{ opacity: '0.5' }} />
          <CardImgOverlay>
            <CardTitle
              onClick={props.onDishSelect}
              style={{ cursor: "pointer" }}>
              {props.dish.name}
            </CardTitle>
          </CardImgOverlay>


        </CardBody>
      </Card>

    </div>
  );
};

export default MenuItem;