import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BookDetails extends Component {

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isopen}>
                <ModalHeader tag='h3'>BooK Name : {this.props.book.bookName}</ModalHeader>
                <ModalHeader tag='h6'>Written By : {this.props.book.writer}</ModalHeader>
                <ModalBody>
                    Description :{this.props.book.description}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default BookDetails;