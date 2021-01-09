import React from 'react';
import {Card,CardBody,CardSubtitle,CardTitle,Button} from 'reactstrap'
const BookView = (props) => {
    return (
        
        <div className="my-5 col-md-4 col-sm-6">
            <Card>
                <CardBody>
                    <CardTitle tag='h3'>{props.book.bookName}</CardTitle>
                    <CardSubtitle>{props.book.writer}</CardSubtitle>
                    <Button onClick={props.detailsBook} className="m-4">See Details</Button>
                </CardBody>
            </Card>
            
        </div>
    );
};

export default BookView;