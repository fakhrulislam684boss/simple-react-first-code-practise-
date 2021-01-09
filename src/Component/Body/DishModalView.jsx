import React from 'react';
import LoadComment from  './LoadComment'
import CommentForm from './CommetForm'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
const DishModalView = (props) => {
    
    return (
        <div>
        <Card>
        <CardImg top width="100%" src={props.dish.image} />
        <CardBody>
        <CardTitle tag="h5">{props.dish.name}</CardTitle>
        <CardText> <b>Description:</b> {props.dish.description}</CardText>
        <hr/>
        <LoadComment comment={props.comment}  />
         <hr/>
        <CommentForm dishId = {props.dish.id} addComment={props.addComment} />
        </CardBody>
      </Card>
        </div>
    );
};

export default DishModalView;