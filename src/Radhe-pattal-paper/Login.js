

import './login.css'

export default function Login(props){
   
    return (
      <div>
        <div className='login'>
        <form  onSubmit={props.onclick}>
        <label htmlFor='email'>Email Id</label><br/>
         <input type='email'name='email'/><br/>  {/*john@mail.com */}
         <label htmlFor='password'>Password</label><br/> {/*//changeme*/}
        <input type='password'name='password'/><br/><br/>
        <button type='submit'>Login</button>
        <button type='reset'>reset</button>
        </form>
        </div>
      </div>
    )
  }

