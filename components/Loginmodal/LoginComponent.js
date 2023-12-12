import React, { useState } from 'react'
import styles from '../../styles/Modal/loginmodal.module.css'
import Signup from './Signup'
import Signin from './Signin'

function LoginComponent( {onCloselog} ) {

  const[sign,setSign] = useState(true)


  return (
    <div className={styles.wcontainer}>
      <div className={styles.innercontainer}>
        <button className={styles.closebtn} onClick={onCloselog}>X</button>
          <div className={styles.headers}>
            <div className={sign ? `${styles.active}` : `${styles.header}`} onClick={() => setSign(true)}>Sign Up</div>
            <div className={sign ? `${styles.header}` : `${styles.active}`} onClick={() => setSign(false)}>Sign In</div>
          </div>

          {sign ? <Signup /> : <Signin />}

      </div>
    </div>
  )
}

export default LoginComponent