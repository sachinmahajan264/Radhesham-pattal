import { useEffect, useState } from 'react'

export default function ApiTable() {
    const[users,setUsers]= useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data=>setUsers(data.users))
        .catch(err=>console.log(err))
    },[]);
    
  return (
    <div>
      <table border='1' cellPadding='10'>
        <thead>
        <tr>
            <th>s no</th>
            <th>Name</th>
            <th>age</th>
            <th>email</th>
        </tr>
        </thead>
        <tbody>
        {users.map((u)=>(
        <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.maidenName} {u.lastName}</td>
            <td>{u.age}</td>
            <td>{u.email}</td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
