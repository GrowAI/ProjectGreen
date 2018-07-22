import React, {Component} from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Data from '../../Data/nodes-api'
import Grid from '@material-ui/core/Grid';
const test=[{id:'111111',roomSize:'hye',nodeList:'bitch',createdAt:'2018-07-14 19:29:29'}]

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
box: {
    width: '300px',
    height: '100px',
    border: '1px solid blue' 
  },
};
function getDbDate (value) {
  const split=JSON.stringify(value);
const dbDate = split.split(':')
const splitDate=dbDate[0].split('-')
const dayCreated =splitDate[2].split('T')
const removed=splitDate[0].split('"')

const dates=splitDate[1]+'-'+dayCreated[0]+'-'+removed[1]
return dates
 };
class Room2 extends Component {
  state = {
    room:[]
  } 
  
  componentDidMount = () => {

    Data.getById().then(data => {
        console.log(data.data)
this.setState({
  room:data.data
})
    })

  }
  
 livereload = () => {
  // setInterval(function(){
  //       }) }, 9000);
  
      
        setInterval(function(){    Data.getAll().then(data => {
          this.setState({
            room:data.data
          })
              })}, 5000);
            
  
  }
  refresh = () => {
    
    Data.getById().then(data => {
this.setState({
  room:data.data
})
    })

  }
    render(){

      return (
    
        <div className="Room">
        <button onClick={this.refresh}> click me for new information from db </button>
        <button onClick={this.livereload}> click me for live reload </button>
        <br/>   <br/>   <br/>   <br/>
        <Grid container spacing={4}>
        
        <br/><br/><br/>
         {this.state.room.map((tile) => (
              <Grid xs={4}>
           <div style={styles.box}>
         
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
</Grid>
         ))}

         
      </Grid>
      
        </div>
      
      )
    }

  }
 

export default Room2;

