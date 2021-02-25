import React, {Component} from 'react';
import logo from './assets/images/typespeed.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// import RandomWords from './components/randomwords';
import Login from './components/login';
import Game from './components/game';

class App extends Component{
 render(){
      return(<div className="App">
            <header className="App-header p-5 m-5">
                       <img src={logo} className="App-logo" alt="logo" />             
            </header>
              <div>
                 {/* <Login/> */}
                 <Game/>
              </div>
            
          </div>
      )
 }
}

export default App;
