import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
import Body from './Body/mainBody'
import Footer from './Footer/footer'
class mainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default mainComponent;