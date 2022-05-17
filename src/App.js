import React, {Component} from 'react';
import './App.css';
import Player from './Player'
class App extends Component {
   state = {
      players:[
         {name: 'Smith', score:100 },
         {name: 'David', score:90},
         {name: 'Phil', score:80}
      ],
   otherObject:'Test'
}
switchPlayerHandler = () =>{
   this.setState({players:[
      {name: 'Smith', score:200},
      {name: 'David', score:290},
      {name: 'Phil', score:380}]});
      // console.log("hi")
   }
   render(){
      return (
         <div className="App">
            <button onClick={this.switchPlayerHandler}>
               Switch Player
            </button>
            <Player name={this.state.players[0].name}
               score={this.state.players[0].score}
               click={this.switchPlayerHandler}/>
            <Player name={this.state.players[1].name}
               score={this.state.players[1].score}
               click={this.switchPlayerHandler}>
               {/* Plays for Australia */}
            </Player>
            <Player name={this.state.players[2].name}
               score={this.state.players[2].score}
               click={this.switchPlayerHandler}/>
         </div>
      );
   }
}
export default App;