import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import Navbar from './Navbar/Navbar'
import './app.scss'
class App extends Component {
  state = {
  } 
    render(){
      return (
        <BrowserRouter>
        <div className="app">
          <Navbar>

          </Navbar>
         
      
      
        </div>
      </BrowserRouter>
      )
    }

  }
 

export default App;


