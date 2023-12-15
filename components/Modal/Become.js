import styles from '../../styles/Modal/modal.module.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Become() {
  const [formValues, setFormValues] = useState({
    name: "",
    number: "",
    email: "",
    city: ""
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9988l0b', 'template_cny7ddo', form.current, 'R3qaT7lUrDYmmR-mK')
      .then(() => {
          setFormValues({
            name: "",
            number: "",
            email: "",
            city: ""
          });
          alert('The Form Has Been Submitted')
      }, (error) => {
          console.log(error.text);
      });
  };

  const cities = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra & Nagar Haveli and Daman & Diu','Delhi','Jammu and Kashmir','Lakshadweep','Puducherry','Ladakh']

  return (
    <>
  <form className={styles.label} ref={form} onSubmit={(e) => sendEmail(e)}>
      <div className={styles.flex}>
        <label>Name</label>
        <input type='text' className={styles.input} placeholder='Enter Your Name' name='name' value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          } required/>
      </div>
      <div className={styles.flex}>
        <label>Phone Number</label>
        <input type='tel' className={styles.input} placeholder='Enter Your Phone Number' name='number' value={formValues.number}
          onChange={(e) =>
            setFormValues({ ...formValues, number: e.target.value })
          } required/>
      </div>
      <div className={styles.flex}>
        <label for="phone">Email</label>
          <input type='email' className={styles.input} placeholder='Enter Your Email' name='email' value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          } required/> 
      </div> 
      <div className={styles.flex}>
        <label>State</label>
        {/* <input type='text' className={styles.input} placeholder='City' name='city' value={formValues.city}
          onChange={(e) =>
            setFormValues({ ...formValues, city: e.target.value })
          } required/> */}
          <select className={styles.input} name="city" id="city" value={formValues.city} onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}>
            {cities.sort().map(data=><option classname={styles.states} key={data} value={data}>{data}</option>)}
          </select>
      </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </>
  )
}
