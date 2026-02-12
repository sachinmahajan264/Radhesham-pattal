import axios from 'axios';
import Profile from './Profile';
import { useState } from 'react'

export default function Api() {
    const[formdata,setFormdata]=useState({
      email:'',
      password:''
    });
    const[profiledata,setProfiledata]=useState(null);

 const onchangedata=(e)=>{
 const{name,value}=e.target;
  setFormdata((prevdata)=>({
      ...prevdata,[name]:value
 }) )};
const onsubmitdata=async(e)=>{
  e.preventDefault();
  const {email,password}=formdata;
  try{
  const response= await axios.post('https://api.escuelajs.co/api/v1/auth/login',
    {
       email,
      password
    });
    console.log(response.data)
    localStorage.setItem("token",JSON.stringify(response.data.access_token))
    alert("hee")
    const token=JSON.parse(localStorage.getItem('token'))
const header={
  headers:{
    Authorization:`Bearer ${token} `
  }
}
  axios.get(' https://api.escuelajs.co/api/v1/auth/profile',header)
.then((res)=>{
  console.log('profile data',res)
  setProfiledata(res.data);
})
.catch((err)=>{
  console.log("error accured",err)
}
)
}
catch(error){
console.log("failde",error)
localStorage.removeItem("token")
  alert("error")

}

}
const lougout =()=>{
  localStorage.removeItem('token');
   setProfiledata(null);
}

  return (
    <div>
    <form onSubmit={onsubmitdata}>
     <label htmlFor='email'>email</label>  <br/>
      <input
       type='email'
        name='email'
        id='email'
        onChange={onchangedata}
        />
        <br/>
      <label htmlFor='password'>password</label>  <br/>
      <input 
      type='password' 
      name='password'
      id='password'
      onChange={onchangedata}
      /><br/>
      <button type='submit'>submit</button>
      <button type='reset'>Reset</button>
       <button type='button' onClick={lougout}>log out</button>
  </form>
  < Profile data={profiledata}/>
  </div>
  );

 
}