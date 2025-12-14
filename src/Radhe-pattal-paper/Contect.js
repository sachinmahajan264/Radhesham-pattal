import { useState } from 'react';
import { app, analytics } from '../Firebase';
import { getDatabase, ref, set } from 'firebase/database';
import './Contect.css';
import Arun from './pattal/arun paper .jpg';

export default function Contect() {
  const [data, setData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    telephone: '',
    address: '',
    city: ''
  });

  const onchanged = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const db = getDatabase(app);
  const username = data.name + " " + data.lastname;
  const date = new Date();
  const userRef = ref(db, `${username}_${date}`);

  const onsubmitt = (e) => {
    e.preventDefault();
    const {
      name,
      lastname,
      email,
      phone,
      telephone,
      address,
      city
    } = data;

    set(userRef, {
      name,
      lastname,
      email,
      phone,
      telephone,
      address,
      city
    })
      .then(() => {
        alert("Form submitted successfully!");
        console.log(data);
        setData({
          name: '',
          lastname: '',
          email: '',
          phone: '',
          telephone: '',
          address: '',
          city: ''
        });
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Failed to submit form. Please try again.");
      });
  };

  return (
    <div className='contect'>
      <div className='aurn'>
        <img src={Arun} className='imgarun' />
      </div>

      <div className='detail'>
        <h1 className='h1'>Add Your Details & Order Now</h1>
      </div>

      <div>
        <form className='form' onSubmit={onsubmitt}>
          <div className='form1'>

            <div className='text'>
              <label htmlFor='name'>First Name :</label>
              <input required onChange={onchanged} type='text' name='name' id='name' className='input3' value={data.name} />
            </div>

            <div className='text'>
              <label htmlFor='lastname'>Last Name :</label>
              <input required onChange={onchanged} type='text' name='lastname' id='lastname' className='input3' value={data.lastname} />
            </div>

            <div className='text'>
              <label htmlFor='email'>Email Id :</label>
              <input required onChange={onchanged} type='email' name='email' id='email' className='input3' value={data.email} />
            </div>

            <div className='text'>
              <label htmlFor='city'>City :</label>
              <input required onChange={onchanged} type='text' name="city" id='city' className='input3' value={data.city} /><br />

              <label htmlFor='Phone'>Phone no:</label>
              <input required onChange={onchanged} type='number' name='phone' id='phone' className='input3' value={data.phone} /><br />

              <label htmlFor='telephone'>Telephone no:</label>
              <input required onChange={onchanged} type='number' name='telephone' id='telephone' className='input3' value={data.telephone} />
            </div>

            <div className='text'>
              <label htmlFor='address'>Address :</label><br />
              <textarea name="address" value={data.address} onChange={onchanged} rows="4" cols="38" id="address" placeholder="Type your Proper Address" required className='input4' />
            </div>

            <div>
              <button type='reset' className='button' onClick={() => setData({
                name: '',
                lastname: '',
                email: '',
                phone: '',
                telephone: '',
                address: '',
                city: ''
              })}>Reset</button>

              <button type='submit' className='button'>Submit</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}