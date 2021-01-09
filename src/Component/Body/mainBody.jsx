import React, { Component } from 'react';
import  Home from './Home'
import About from './About'
import Contact from './Contact'
import Books from './Books'
import NewBook from './NewBook'
 
import Menu from './menu'
import {Route,Redirect} from 'react-router-dom'
class mainBody extends Component {
    render() {
        return (
            <div>
              
                    <Route path="/home" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/books" exact component= {Books}/>
                    <Route path="/new-book" exact component={NewBook} />
                    <Route path="/menu" exact component={Menu} />
                    <Redirect from ='/' to ='/home' />
            </div>  
        );
    }
}

export default mainBody;