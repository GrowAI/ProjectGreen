import React, {Component} from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Test from './Home/HomeComponets/Carousel'
import Organization from './Organization'
import Home from "./Home/index"
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
   
<Test/>
          <Switch>
          <Route exact path='/' Component={Home} />
                        </Switch>
      
      
        </div>
      </BrowserRouter>
      )
    }

  }
 

export default App;


