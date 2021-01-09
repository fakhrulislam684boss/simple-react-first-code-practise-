import React, { Component } from 'react';
import BookDetails from './BookDetails'
import BooksArray from '../../asset/Books'
import Book from './BookView'
class Books extends Component {
    state={
        books:BooksArray,
        selectedBook: '',
        isOpen:false
    }

    detailsBook =(book)=>{
    
        this.setState({
            isOpen: ! this.state.isOpen,
            selectedBook:book
        })
    
    }
     toggle=()=>{
        this.setState({
            isOpen: ! this.state.isOpen
        })
    }
    render() {

        let book= this.state.books.map((book)=>{
            return(
                <Book book={book} detailsBook={()=> this.detailsBook(book)} key={book.id} />
            )
        })

    let SelecBookDetais = < BookDetails  book={this.state.selectedBook} isopen={this.state.isOpen} toggle={this.toggle} />
        return (
            <div className="container">
                <div className="row">
                    {book}
                </div>
                {SelecBookDetais}
            </div>
        );
    }
}

export default Books;