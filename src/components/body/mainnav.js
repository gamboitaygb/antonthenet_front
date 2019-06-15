import React, { Component } from 'react';
import Card from './post/card'
class MainNav extends Component{

    arreglo = [
        {
            "Titulo":"Hola",
            "img":"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80",
            "body":"Lorem im"
        }
        , {
            "Titulo": "Mundo",
            "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80",
            "body": "Lorem im"
        },
        {
            "Titulo": "Cruel",
            "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80",
            "body": "Lorem im"
        }
    ]
    
    render() {
        return (
            <div className="container">
                <ul className = "nav nav-tabs" id = "myTab" role = "tablist" >
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Ultimos post</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Comentarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Preguntas</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        {this.arreglo.map((elemento,index) =>{return <Card key={index} img={elemento.img} title={elemento.title} body={elemento.body} /> })}
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h3>Blog component comments here</h3>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <h1>Blog questions here</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainNav