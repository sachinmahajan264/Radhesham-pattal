import { Component } from 'react';
import Login from './Radhe-pattal-paper/Login';
 import Pattal from './Radhe-pattal-paper/Pattal'
import './App.css';

import axios from 'axios';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      data:{
        email:'',
        password:''
      },
      Islogin:false
    }
    
  }
   onclickelog = async(e)=>{
    e.preventDefault();
     const email=e.target.email.value;
     const password=e.target.password.value;
     this.setState({data:{email,password}},
      ()=>  console.log(this.state.data)
    );
   try{
    const hellow= await axios.post(
       'https://api.escuelajs.co/api/v1/auth/login',
       {
        email: email,
        password: password
       }
      );
      console.log('login successful', hellow);
      alert("login successful");
      localStorage.setItem("token",JSON.stringify(hellow.data.access_token));
      this.setState({Islogin : true})
  }
    catch(error){
console.log('login failed:',error);
alert('wrong email or password')
    };
  }
    
   onclicklogout=()=>{
    localStorage.removeItem('token');
    this.setState({Islogin : false})
    alert("Logout page")
   } 

 
  render(){
  return(
    <div>
    { this.state.Islogin ? <Pattal logout={this.onclicklogout} />  :   <Login onclick={this.onclickelog}/>}
    </div> 
  );
  }
}
   export default App;
