import React, {Component} from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Data from '../../Data/nodes-api'
const test=[{id:'111111',roomSize:'hye',nodeList:'bitch',createdAt:'2018-07-14 19:29:29'}]


function getDbDate (value) {
  const split=JSON.stringify(value);
const dbDate = split.split(':')
const splitDate=dbDate[0].split('-')
const dayCreated =splitDate[2].split('T')
const removed=splitDate[0].split('"')

const dates=splitDate[1]+'-'+dayCreated[0]+'-'+removed[1]
return dates
 };
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
        <br/>    <br/>    <br/>
       
         {this.state.room.map((tile) => (
           <div>
         
             <p>{tile.nodeId}</p>
<p>{tile.userId}</p>
<p>{tile.temperature}</p>
<p>{tile.humidity}</p>
<p>{tile.r}</p>
<p>{tile.g}</p>
<p>{tile.b}</p>
<p>{tile.lux}</p>
<p>{tile.full}</p>
<p>{tile.visable}</p>
<p>{tile.ir}</p>
<p>{tile.roomId}</p>

<p>{getDbDate(tile.createdAt)}</p>
</div>
         ))}

         
      
      
        </div>
      
      )
    }

  }
 

export default Room;

