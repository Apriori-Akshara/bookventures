import React from "react";
import Navbar from "../../components/testpage/navbar/Newnavbar";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from "../../styles/contactus/contactus.module.css";
import Modal from "../../components/Modal/Modal";
import MyComponent from "../../components/Modal/Mycomponent";
import LoginModal from '../../components/Loginmodal/LoginModal'
import LoginComponent from '../../components/Loginmodal/LoginComponent'
import { useDispatch, useSelector } from "react-redux";
import { falsey } from "../../store/slices/modalSlice";
import { falcey } from "../../store/slices/loginSlice/loginmodalSlice";
import ProfileModal from '../../components/Porfilemodal/ProfileModal'
import ProfileComponent from '../../components/Porfilemodal/ProfileComponent'
import { falsch } from '../../store/slices/ProfileSlice/ProfileSlice'

const index = () => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const loginmodal = useSelector(state => state.loginmodal);
  const profilemodal = useSelector(state => state.profile);
  
  return (
    <>
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>Contact Us</div>
        <div className={styles.subcontainer}>
          <div className={styles.topic}>Get in touch</div>
          <div className={styles.infos}>
            <div className={styles.info}>
              <div className={styles.infotitle}>Address Info:</div>
              303 A, <br />
              Hemkunt Chambers, <br />
              Nehru Place 110019
            </div>
            <div className={styles.info}>
              <div className={styles.infotitle}>Email Info:</div>
              <b>Editorial:</b> <br /> editorial@hyperglotreview.com
              <br />
              <b>Operations:</b> <br /> operations@hyperglotreview.com
              <br />
              <b>Sales & Marketing:</b> <br /> info@hyperglotreview.com
              <br />
            </div>
            <div className={styles.info}>
              <div className={styles.infotitle}>Phone Info:</div>
              <b>Landline</b> <br /> 011 3569 1637
              <br />
              <b>Operations</b> <br /> +91 97171 89650/ 659
              <br />
              <b>Sales</b> <br /> +91 97170 41338
              <br />
              <b>Editorial</b> <br /> +91 97171 89138
              <br />
            </div>
          </div>
        </div>

        <div className={styles.subcontainer}>
          <div className={styles.flex}>
            <div className={styles.mapcontainer}>
              <div className={styles.maptitle}>Location Map</div>
              <div className={styles.mapp}>
                <iframe
                  className={styles.frame}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.3476705615544!2d77.25111663864222!3d28.548875650008164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5169e0e05%3A0xcd70c7b07c55f036!2sHemkunt%20Chambers!5e0!3m2!1sen!2sin!4v1701147259591!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className={styles.mapcontainer}>
              <div className={styles.maptitle}>Message Us</div>
              <form className={styles.form}>
                <input placeholder="Full Name" />
                <input placeholder="Email Address" />
                <textarea placeholder="Write a Message" />
                <button className={styles.button}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <Modal open={modal.value}>
        <MyComponent onClose={() => dispatch(falsey())} />
      </Modal>
      <LoginModal logopen={loginmodal.value}>
        <LoginComponent onCloselog={() => dispatch(falcey())}/>
      </LoginModal>
      <ProfileModal proopen={profilemodal.value}>
        <ProfileComponent onClosepro={() => dispatch(falsch())}/>
      </ProfileModal>
    </>

  );
};

export default index;
