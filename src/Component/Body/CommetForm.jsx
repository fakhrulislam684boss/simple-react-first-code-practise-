import React, { Component } from 'react';
import {Form,Input,Button} from 'reactstrap'
class CommetForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            author: '',
            rating: '', 
            comment: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit  = this.handleSubmit.bind(this)
    }

    handleOnChange = (e) =>{
        this.setState({
             [e.target.name] : e.target.value
        })
    }
    handleSubmit =(e)=>{
       let comment = {
           author:this.state.author,
           rating:this.state.rating,
           comment:this.state.comment,
           dishId:this.props.dishId,
           date: new Date().toDateString()
       }
        this.props.addComment(comment)
        this.setState({
            author: '',
            rating: '', 
            comment: ''
        })
       
        e.preventDefault()
    }
    render() {
      
        return (
            <div>
                <h4 className="mb-4">Add Comment</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" name="author" onChange={this.handleOnChange} placeholder="Your Name" on value = {this.state.author} />  <br/>
                    <Input type="select" name="rating"  onChange={this.handleOnChange}  value = {this.state.rating}>
                        <option > 1 </option>
                        <option > 2 </option>
                        <option > 3 </option>
                        <option > 4 </option>
                        <option > 5 </option>
                      
                    </Input> <br/>

                    <Input type = 'textarea'  onChange={this.handleOnChange}  placeholder="Text Here" name="comment" value= {this.state.comment} />

                    <Button className="my-2" type="submit" >Submit Comment</Button>

                </Form>
            </div>
        );
    }
}

export default CommetForm;