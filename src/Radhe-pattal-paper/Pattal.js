import { Routes,Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contect from './Contect';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav'
import Arun from './Arun';

export default function Pattal(props){
 const navigate=useNavigate();
 const openwith = (e) => {
  e.preventDefault();
  navigate('/About')
}
  
    return (
      <div>
      <Nav/>
        <Routes>
          <Route path='/arun' element={<Arun/>}/>
            <Route path='/' element={<Home  openwith={openwith}/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/contect' element={<Contect/>}/>
        </Routes>
      </div>
    )
  }

