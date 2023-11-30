import styles from '../../styles/Modal/modal.module.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Formui() {
  const [formValues, setFormValues] = useState({
    name: "",
    id: "",
    email: "",
    bookname: "",
    authorname: "",
    time: ""
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9988l0b', 'template_fthb8xh', form.current, 'R3qaT7lUrDYmmR-mK')
      .then(() => {
          setFormValues({
            name: "",
            id: "",
            email: "",
            bookname: "",
            authorname: "",
            time: ""
          });
          alert('The Form Has Been Submitted')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <form className={styles.label} ref={form} onSubmit={(e) => sendEmail(e)}>
      <div className={styles.flex}>
        <label>Name</label>
        <input type='text' className={styles.input} placeholder='Enter Your Name' name="name" value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          } required/>
      </div>
      <div className={styles.flex}>
        <label>Membership ID</label>
        <input type='text' className={styles.input} placeholder='Enter Your ID' name="id" value={formValues.id}
          onChange={(e) =>
            setFormValues({ ...formValues, id: e.target.value })
          } required/>
      </div>
      <div className={styles.flex}>
        <label>Email</label>
        <input type='email' className={styles.input} placeholder='Enter Your Email' name="email" value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          } required/>
      </div>
      <div className={styles.flex}>
        <label>Name of the Book</label>
        <input type='text' className={styles.input} placeholder='Enter Your Name' name="bookname" value={formValues.bookname}
          onChange={(e) =>
            setFormValues({ ...formValues, bookname: e.target.value })
          } required/>
      </div>
      <div className={styles.flex}>
        <label>Name of the Author</label>
        <input type='text' className={styles.input} placeholder='Enter Your Name' name="authorname" value={formValues.authorname}
          onChange={(e) =>
            setFormValues({ ...formValues, authorname: e.target.value })
          } required/>
      </div>
      <div className={styles.flex}>
        <label>Suggested Timings</label>
        <input type='time' className={styles.input} placeholder='Enter Your Timings' name="time" value={formValues.time}
          onChange={(e) =>
            setFormValues({ ...formValues, time: e.target.value })
          } required/>
      </div>
      <button type="submit" className={styles.button}>Submit</button>
      </form>
    </>
  )
}
