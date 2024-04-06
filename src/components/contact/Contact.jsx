import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.ContactBox} id='contact'>
      <span className={styles.color}>Bhudeo Krit</span>
      <div className={styles.bigbox}>
        <div className={styles.my}>My</div>
        <div className={styles.skill}>Contact</div>
        <div className={styles.form}>
          <form action="">
            <div className={styles.name}>
              <label htmlFor="name">NAME</label><br />
              <input type="text" id='name' placeholder='ENTER YOUR NAME'/><br />
            </div>
            <div className={styles.cont}>
              <div>
                <label htmlFor="phone">PHONE NUMBER</label><br />
                <input type="text" id='phone' className={styles.number} placeholder='ENTER YOUR PHONE NUMBER'/>
              </div>
              <div>
                <label htmlFor="email">EMAIL</label><br />
                <input type="email" id='email' className={styles.email} placeholder='ENTER YOUR EMAIL ADDRESS'/>
              </div>
            </div>
            <div className={styles.message}>
              <label htmlFor="message">YOUR MESSAGE</label><br />
              <textarea name="" id="message" cols="30" rows="10" placeholder='ENTER YOUR MESSAGE'></textarea>
            </div>
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  )
}
