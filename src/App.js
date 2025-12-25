import { Component } from 'react';
import Pattal from './Radhe-pattal-paper/Pattal';
import ApiTable from './ApiTable';
import Web from './Radhe-pattal-paper/Web';



class App extends Component{
  constructor(props){
    super(props);
   
    
  }
  
 
  render(){
  return(
    <div>
      {/* <ApiTable/> */}
      {/* <Pattal/> */}
      <Web/>
    </div> 
  );
  }
}
   export default App;
