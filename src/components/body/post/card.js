import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="card col-12 col-md-4">
                <img className="card-img-top" src={this.props.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.body}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
            </div>
        )
    }
}

export default Card;