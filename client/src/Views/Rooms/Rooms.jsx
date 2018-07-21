import React, {Component} from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Data from '../Data/nodes-api.js'
class Room extends Component {
  state = {
    room:[]
  } 
  componentDidMount = () => {

    Data.getAll().then(data => {
this.setState({
  room:data.data
})
    })

  }
    render(){
      return (
    
        <div className="Room">
         
         {this.state.products.map((tile) => (
           <div>
<p>{tile.size}</p>
<p>{tile.list}</p>
</div>
         ))}

         
      
      
        </div>
      
      )
    }

  }
 

export default Room;

