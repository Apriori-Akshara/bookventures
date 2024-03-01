import React, { useState, useRef } from "react";
import styles from "../../styles/Modal/loginmodal.module.css";
import cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Signinsuccess } from "../../store/slices/User/UserSlice.js";
import { falcey } from "../../store/slices/loginSlice/loginmodalSlice";

export default function Signup() {
  const aRef = useRef(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const form = useRef();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/auth/local/register`,
        {
          headers: {
            // Authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user.user),
          method: "POST",
        }
      );
      const data = await res.json();
      cookie.set("username", data.user.username, { expires: 1 / 24 });
      cookie.set("email", data.user.email, { expires: 1 / 24 });
      cookie.set("img", data.user.img, { expires: 1 / 24 });
      cookie.set("jwt", data.jwt, { expires: 1 / 24 });
      cookie.set("id", data.user.id, { expires: 1 / 24 });
      dispatch(falcey());
      dispatch(
        Signinsuccess({
          username: cookie.get("username"),
          email: cookie.get("email"),
          img: cookie.get("img"),
          password: "",
          phone: "",
          jwt: cookie.get("jwt"),
          id: cookie.get("id"),
        })
      );
      aRef.current.value = null;
      setImage("");
      alert("User Signed Up");
    } catch (error) {
      console.log(error);
      alert("User Exists");
      dispatch(
        Signinsuccess({
          username: cookie.get("username"),
          email: cookie.get("email"),
          img: cookie.get("img"),
          password: "",
          phone: "",
          jwt: cookie.get("jwt"),
          id: cookie.get("id"),
        })
      );
    }
  };
  const submitImage = () => {
    const imgdata = new FormData();
    imgdata.append("file", image);
    imgdata.append("upload_preset", "pzbpjses");
    imgdata.append("cloud_name", "dtrtghqcv");

    fetch("https://api.cloudinary.com/v1_1/dtrtghqcv/image/upload", {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((data) => dispatch(Signinsuccess({ ...user.user, img: data.url })));
  };

  return (
    <>
      <form ref={form} className={styles.form} onSubmit={sendData}>
        <div className={styles.formflex}>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter Your UserName"
            name="userName"
            value={user.user.username}
            onChange={(e) =>
              dispatch(
                Signinsuccess({ ...user.user, username: e.target.value })
              )
            }
            required
          />
        </div>
        <div className={styles.formflex}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={user.user.email}
            onChange={(e) =>
              dispatch(Signinsuccess({ ...user.user, email: e.target.value }))
            }
            required
          />
        </div>
        <div className={styles.formflex}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={user.user.password}
            onChange={(e) =>
              dispatch(
                Signinsuccess({ ...user.user, password: e.target.value })
              )
            }
            required
          />
        </div>
        <div className={styles.formflex}>
          <label>Phone</label>
          <input
            type="text"
            placeholder="Enter Your Phone"
            name="phone"
            value={user.user.phone}
            onChange={(e) =>
              dispatch(Signinsuccess({ ...user.user, phone: e.target.value }))
            }
          />
        </div>
        <div className={styles.formflex}>
          <label>Image</label>
          <input
            type="file"
            name="img"
            ref={aRef}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {user.user.img ? (
            <p className={styles.imgpara}>Image has been uploaded!</p>
          ) : (
            <button
              className={styles.imgbutton}
              type="button"
              onClick={submitImage}
            >
              Upload Image
            </button>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
    </>
  );
}
