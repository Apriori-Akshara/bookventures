import React, { useState } from 'react'
import styles from '../../styles/profilemodal/profile.module.css'
import { useSelector } from "react-redux";
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { DeleteUser } from '../../store/slices/User/UserSlice'
import { falsch } from "../../store/slices/ProfileSlice/ProfileSlice";
import { BiArrowBack } from "react-icons/bi";
import { Signinsuccess } from '../../store/slices/User/UserSlice';

export default function ProfileComponent( {onClosepro} ) {
  const user = useSelector(state => state.user);
  const [image,setImage] = useState("")
  const [updateuser, setUpdateuser] = useState({username: '',
  email: '',
  img: '',
  // cpassword: '',
  npassword: '',
  })
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(true)
  console.log(updateuser)

  const deletecookie = () => {
    cookie.remove('email')
    cookie.remove('img')
    cookie.remove('username')
    dispatch(DeleteUser({username: '',
    email: '',
    img: '',
    password: '',
    phone: '',
    id: ''
    }))
    dispatch(falsch())
  }

  const handlesendData = async (e) => {
    e.preventDefault();

    const responseData = await fetch(`${process.env.NEXT_PUBLIC_URL}/users/${user.user.id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: "bearer " + `${user.user.jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: updateuser.username ? updateuser.username : user.user.username,
      email: updateuser.email ? updateuser.email : user.user.email,
      img: updateuser.img ? updateuser.img : user.user.img,
      password: updateuser.npassword ? updateuser.npassword : user.user.npassword,
      }),
    }
  );
  const newprofiledata = await responseData.json();
  console.log(newprofiledata)
  newprofiledata.username && cookie.set("username", newprofiledata.username , { expires: 1 / 24 })
  newprofiledata.email && cookie.set("email", newprofiledata.email , { expires: 1 / 24 })
  newprofiledata.img && cookie.set("img", newprofiledata.img , { expires: 1 / 24 })
  newprofiledata.jwt && cookie.set("jwt", newprofiledata.jwt , { expires: 1 / 24 })
  newprofiledata.id && cookie.set("id", newprofiledata.id , { expires: 1 / 24 })
  dispatch(falsch())
  dispatch(Signinsuccess({username: cookie.get('username'),
  email: cookie.get('email'),
  img: cookie.get('img'),
  password: '',
  phone: '',
  jwt:cookie.get('jwt'),
  id:cookie.get('id')
  }))
}

const submitImage = () => {
  const imgdata = new FormData()
  imgdata.append("file",image)
  imgdata.append("upload_preset","bookventures")
  imgdata.append("cloud_name","dvovclald")

  fetch("https://api.cloudinary.com/v1_1/dvovclald/image/upload",({
    method:'POST',
    body:imgdata
  })).then((res) => res.json())
  .then((data)=> setUpdateuser({ ...updateuser, img: data.url})
  )
}

  return (
    <div className={styles.wcontainer}>
      <div className={styles.innercontainer}>
        <div className={styles.topsection}>
        {!update && <div><BiArrowBack onClick={() => setUpdate(true)} className={styles.backbtn}/></div>}
        <div>Hi, {user.user.username}</div><div className={styles.close} onClick={onClosepro}>X</div></div>
        {update ? <div><div className={styles.middle}>Press down the button below to LogOut or<br /> Update Userinfo!</div>
        <div className={styles.btnflex}>
          <button onClick={deletecookie} className={styles.logoutbtn}>LogOut</button>
          <button onClick={() => setUpdate(false)} className={styles.logoutbtn}>Update</button>
        </div></div> :     <form className={styles.form} 
        onSubmit={handlesendData}
        >
    <div className={styles.formflex}>
      <div className={styles.labelflex}><label>UserName</label><div className={styles.info}>{user.user.username}</div></div>
      <input type='text' placeholder='Enter Your UserName' name="userName" value={updateuser.username} 
       onChange={(e) => setUpdateuser({...updateuser, username: e.target.value })}
      />
    </div>
    <div className={styles.formflex}>
      <div className={styles.labelflex}><label>Email</label><div className={styles.info}>{user.user.email}</div></div>
      <input type='email' placeholder='Enter Your Email' name="email" value={updateuser.email} 
       onChange={(e) => setUpdateuser({...updateuser, email: e.target.value })}
       />
    </div>
    {/* <div className={styles.formflex}>
      <label>Current Password</label>
      <input type="password" placeholder='Enter Your Password' name="cpassword" value={updateuser.password} 
       onChange={(e) => setUpdateuser({...updateuser, cpassword: e.target.value })}
             /> 
    </div> */}
    <div className={styles.formflex}>
      <label>New Password</label>
      <input type="text" placeholder='Enter Your Password' name="npassword" value={updateuser.password} 
       onChange={(e) => setUpdateuser({...updateuser, npassword: e.target.value })}
             /> 
    </div>
    <div className={styles.formflex}>
    <label>Image</label>
      <input type='file' name="img" 
      // ref={aRef}
            onChange={(e) => setImage(e.target.files[0])}
             />
          {updateuser.img ? <p className={styles.imgpara}>Image has been uploaded!</p> : <button className={styles.imgbutton} type='button' onClick={submitImage}>Upload Image</button>}
    </div>

      <button type="submit" className={styles.button}>Sign Up</button>
    </form>}

      </div>
    </div>
  )
}
