import React from 'react'
import Topcomponent from "../../components/homepage/topcomponent";
import Footer from "../../components/homepage/bottomcomponent/footer";
import styles from '../../styles/contactus/contactus.module.css'

const index = () => {
  return (
    <div>
      <Topcomponent />
        <div className={styles.container}>
          <div className={styles.title}>Contact Us</div>
          <div className={styles.subcontainer}>
            <div className={styles.topic}>Get in touch</div>
            <div className={styles.infos}>
              <div className={styles.info}>
                <div className={styles.infotitle}>Address Info:</div>
                E-219,  <br/>
                first floor, Lajpat Nagar - 1,  <br/>
                New Delhi - 110024
              </div>
              <div className={styles.info}>
                <div className={styles.infotitle}>Email Info:</div>
                  <b>Editorial:</b> <br/> editorial@hyperglotreview.com<br/>
                  <b>Operations:</b> <br/> operations@hyperglotreview.com<br/>
                  <b>Sales & Marketing:</b> <br/> info@hyperglotreview.com<br/>
              </div>
              <div className={styles.info}>
                <div className={styles.infotitle}>Phone Info:</div>
                <b>Landline</b> <br/> 011 3569 1637<br/>
                  <b>Operations</b> <br/> +91 97171 89650/ 659<br/>
                  <b>Sales</b> <br/> +91 97170 41338<br/>
                  <b>Editorial</b> <br/> +91 97171 89138<br/>
              </div>
            </div>
          </div>

          <div className={styles.subcontainer}>
          <div className={styles.flex}>
              <div className={styles.mapcontainer}>
              <div className={styles.maptitle}>Location Map</div>
              <div className={styles.mapp}>
              <iframe className={styles.frame} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8360668242626!2d77.243128!3d28.574685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ab7912ed79%3A0x4b665658e2d2e462!2sE-228%2C%20E-228%2C%20Banphul%20Marg%2C%20Block%20E%2C%20Part%201%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1696575866526!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className={styles.mapcontainer}>
            <div className={styles.maptitle}>Message Us</div>
              <form className={styles.form}>
                <input placeholder='Full Name'/>
                <input placeholder='Email Address'/>
                <textarea placeholder='Write a Message'/>
                <button className={styles.button}>Send</button>
              </form>
            </div>
          </div>

          </div>
        </div>
      <Footer />
    </div>
  )
}

export default index