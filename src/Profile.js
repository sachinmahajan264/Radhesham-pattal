import React from 'react'

export default function Profile({data}) {
   if(!data){
    return<p>No Profile data available</p>
   }
  return (
    <div>
      <h1>Profile in this</h1>
      <label>Name : {data.name}</label>
      <p>email : {data.email}</p>
      <p>password : {data.password}</p>
    </div>
  )
}
