import React from 'react'
import styles from '../../styles/profilemodal/profile.module.css'
import { useSelector } from "react-redux";
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { DeleteUser } from '../../store/slices/User/UserSlice'
import { falsch } from "../../store/slices/ProfileSlice/ProfileSlice";

export default function ProfileComponent( {onClosepro} ) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const deletecookie = () => {
    cookie.remove('email')
    cookie.remove('img')
    cookie.remove('username')
    dispatch(DeleteUser({username: '',
    email: '',
    img: '',
    password: '',
    phone: ''
    }))
    dispatch(falsch())
  }

  return (
    <div className={styles.wcontainer}>
      <div className={styles.innercontainer}>
        <div className={styles.topsection}><div>Hi, {user.user.username}</div><div className={styles.close} onClick={onClosepro}>X</div></div>
        <div className={styles.middle}>Press down the button below to LogOut!</div>
        <button onClick={deletecookie} className={styles.logoutbtn}>LogOut</button>
      </div>
    </div>
  )
}
