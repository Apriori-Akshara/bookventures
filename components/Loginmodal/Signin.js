import React, { useState } from 'react'
import styles from '../../styles/Modal/loginmodal.module.css'
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { Signinsuccess } from "../../store/slices/User/UserSlice.js";
import { falcey } from "../../store/slices/loginSlice/loginmodalSlice";

export default function Signin() {
  const dispatch = useDispatch();
  const[data,setData] = useState({
    identifier: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const responseData = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );
    const profiledata = await responseData.json();
    console.log(profiledata)
    cookie.set("username", profiledata.user.username , { expires: 1 / 24 })
    cookie.set("email", profiledata.user.email , { expires: 1 / 24 })
    cookie.set("img", profiledata.user.img , { expires: 1 / 24 })
    cookie.set("jwt", profiledata.jwt , { expires: 1 / 24 })
    cookie.set("id", profiledata.user.id , { expires: 1 / 24 })
    dispatch(falcey())
    dispatch(Signinsuccess({username: cookie.get('username'),
    email: cookie.get('email'),
    img: cookie.get('img'),
    password: '',
    phone: '',
    jwt:cookie.get('jwt'),
    id:cookie.get('id')
  }))
  }
  return (
    <>
    <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.formflex}>
      <label>Email</label>
      <input type='email' placeholder='Enter Your Email' name="UserName" value={data.identifier}
      onChange={(e)=>setData({...data, identifier: e.target.value})} required/>
    </div>
    <div className={styles.formflex}>
      <label>Password</label>
      <input type='password' placeholder='Enter Your Password' name="password" value={data.password}
      onChange={(e)=>setData({...data, password: e.target.value})} required/> 
    </div>
      <button type='submit' className={styles.button}>Sign In</button>
    </form>
    </>
  )
}
