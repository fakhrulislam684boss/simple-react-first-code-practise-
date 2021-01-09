import React, { Component } from 'react';
import {
  Card, CardImg,  CardBody,
  CardTitle, Button
} from 'reactstrap';
class DishDetails extends Component {

 

    render() {
        
        return (
            <div className="col-md-4 my-4">
                <Card>
                    <CardImg  top width="100%" src={this.props.dish.image}  />
                    <CardBody>
                        <CardTitle tag="h5">{this.props.dish.name}</CardTitle>
                        <Button onClick={this.props.selectedDish} className="my-2">View Detils</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DishDetails;