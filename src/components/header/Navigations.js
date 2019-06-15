import React, { Component } from 'react';
class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">AOTN</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fa fa-home fa-1x"></i> <span className="sr-only">(current)</span></a>
                        </li>
                        
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i class="fas fa-edit fa-1x"></i> <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user-circle fa-1x"></i>
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"><i className="fa fa-sign-in-alt fa-1x"></i></a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto social">
                        <li>
                             <input className="bnt-search" type="text" name="search" placeholder="Search.."/>
                        </li>
                        <li><i className="fab fa-github fa-1x"></i></li>
                        <li><i className="fab fa-twitter fa-1x"></i></li>
                        <li><i className="fab fa-facebook fa-1x"></i></li>
                    </ul>
                    
                </div>
                </nav>
        )
    }
}

export default Navigation;