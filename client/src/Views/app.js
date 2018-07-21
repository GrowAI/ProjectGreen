import React, {Component} from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Test from './Home/HomeComponets/Carousel'
import Rooms from './Rooms/Rooms'
import Home from "./Home/index"
// import Navbar from './Navbar2/Navbar'
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
   

          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user/rooms' component={Rooms}/>
                        </Switch>
      
      
        </div>
      </BrowserRouter>
      )
    }

  }
 

export default App;


