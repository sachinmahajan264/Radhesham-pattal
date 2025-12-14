import { Component } from 'react';
import Pattal from './Radhe-pattal-paper/Pattal'

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    
  }
  render(){
  return(
    <div>
    <Pattal />
    </div> 
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
}
export default App;
