import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import Navbar from './Navbar/Navbar'
import './app.scss'
class App extends Component {
  state = {
    render(){
      return (
        <BrowserRouter>
        <div className="app">
          <Navbar>

          </Navbar>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/organization">Organizations</Link></li>
          </ul>
      
          <hr/>
      
          <Route exact path="/" component={Home}/>
          <Route path="/organization" component={Organization}/>
        </div>
      </BrowserRouter>
      )
    }

  }
 
}export default App;


