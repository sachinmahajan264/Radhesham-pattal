import style from './Nav.module.css';
import logo from './pattal/logo-arun.jpg'
import { Link } from 'react-router-dom';


export default function Nav() {
 
  return (<>
   <div className={style.navebar}>
    
     
          <div>
          <Link to='/arun'> <img src={logo}
            alt="Image from URL" className={style.image}/>
            </Link>
            </div>
        <Link to='/' className={style.link}>Home</Link>
         <Link to='/About' className={style.link}>About</Link>
          <Link to='/contect' className={style.link}>Contect</Link>
   </div>
   </>
  )
}
