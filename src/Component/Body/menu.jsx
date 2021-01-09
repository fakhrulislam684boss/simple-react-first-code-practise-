import React, { Component } from 'react';
import DISHIES  from '../../asset//dishes'
import DishDetails from './DishDetails'
import DishModalView  from './DishModalView'
import COMMENTS from '../..//asset/comments'

import { Button, Modal,ModalBody, ModalFooter } from 'reactstrap'
class menu extends Component {
    constructor(){
        super()

        this.state = {
            dishes: DISHIES,
            comments:COMMENTS,
            selectedDish: null,
            isModalOpen: false 
        }
    
    }
    addComment = (comment)=>{
         this.setState({
            comments: this.state.comments.concat(comment)
        })
    }
    selectDish =(dish) =>{
        this.setState({
            isModalOpen : ! this.state.isModalOpen,
            selectedDish: dish
        })
    }
    toggle = () =>{
        this.setState ({

            isModalOpen : ! this.state.isModalOpen
        })
    }
    render() {

        

        let dishes = this.state.dishes.map((dish) => {
            return <DishDetails dish={dish} key={dish.id} selectedDish = {()=> this.selectDish(dish)}  />
        } )
         
        let selectedDish = null
        if(this.state.selectedDish != null){
            let comment =  this.state.comments.filter((comment)=>{
                return comment.dishId === this.state.selectedDish.id
            })
                 selectedDish = <DishModalView addComment={this.addComment} dish = {this.state.selectedDish} comment = {comment}/>
        }
        
        return (
            <div>
            <div className="container">
                <div className="row">
                    {dishes}
                </div>
            </div> 
       
                 <Modal isOpen={this.state.isModalOpen}>
            
            
                <ModalBody>
                    {selectedDish}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>

                </Modal>
            </div>
        );
    }
}

export default menu;