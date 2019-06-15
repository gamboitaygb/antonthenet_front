import React, { Component } from 'react';
import MainNav from './mainnav'
class Body extends Component{
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                     <MainNav/>
                </div>
            </div>
        )

    }
}

export default Body