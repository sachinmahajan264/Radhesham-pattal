
import Pattal from './pattal/paper-pattal.jpg'
import Pattal1 from './pattal/paper1.jpg'

import Pattal4 from './pattal/paper4.jpg'
import Pattal5 from './pattal/paper3.jpg'
import Pattal6 from './pattal/done1.jpg'
import Pattal7 from './pattal/pattal8.jpg'
import Pattal9 from './pattal/pattal9.jpg'
import Pattal8 from './pattal/pattal7.jpg'

import './Home.css'

export default function Home(props) {
 
  return (
    <div className='homepage'>
      <div className='main11'>
        <div className='main1'>
              <img src={Pattal} className='img'/>
        </div>
        <div className='main1'>
           
               <img src={Pattal1} className='img'/>
            
          
        </div>

       
    </div>
        <hr className='hr'/>
    <div className='scroll' onClick={props.openwith.bind()}
>
          <div className='dona1'>
            <img src={Pattal4} className='dona'/>
          </div>
           <div className='dona1'>
            <img src={Pattal5} className='dona'/>
          </div>
           <div className='dona1'>
            <img src={Pattal6} className='dona'/>
          </div>
           <div className='dona1'>
            <img src={Pattal7} className='dona'/>
          </div>
           <div className='dona1'>
            <img src={Pattal9} className='dona'/>
          </div>
           <div className='dona1'>
            <img src={Pattal8} className='dona'/>
          </div>
    </div>
          <div className='radheinfor'>
         <h3><b>🌿 Environmental Benefits</b></h3>
       <ol type="1" className='li'>
            <li><b> Biodegradable and compostable:</b> Made from paper or leaves, they decompose naturally without polluting soil or water.</li>
            <li><b>Plastic-free alternative:</b> With bans on thermocol and single-use plastics, paper pattals and donas offer a safe, government-approved substitute.</li>
            <li><b>Low carbon footprint:</b> Their production requires less energy compared to plastic or metal utensils.</li>
        </ol>
        

         <h3> 🔄 Easy Disposal and Recycling</h3>
       
          <ol className='li'>
          <li> <b>No need for washing or storage:</b> Single-use design saves time and water.</li>
          <li><b> Can be composted or burned safely:</b> Unlike plastic, they don’t release toxic fumes when disposed of.</li>
        </ol>
                 

          
          
          
          
          </div>

     
    </div>
  )
}

