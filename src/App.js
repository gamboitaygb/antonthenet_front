import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/header/header'
import Body from './components/body/body';


function App() {
  return (
    <div className="container-fluid">
        <Header/>
        <Body/>
    </div>
  );
}

export default App;
