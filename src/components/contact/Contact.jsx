import React, { useState } from 'react'
import styles from './Contact.module.css'
import picture from "../assets/picture.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [contact, setContact] = useState({ name: "", email: "", message: "", phone: "" })
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "App de7b879adced9e1bf80f8bd1057e97c5-16841225-bcbd-42a0-a1ce-fc667d724a1d");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  const warning = (message) => {
    toast.warning(message, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const error = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const success = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const raw = JSON.stringify({
    "messages": [
      {
        "from": "447860099299",
        "to": "916206310174",
        "messageId": "3cd775cb-d2a9-43a7-93fb-3dc6b70a1818",
        "content": {
          "templateName": "message_test",
          "templateData": {
            "body": {
              "placeholders": [`Bhudeo : My details - Name:${contact.name} ,  Phone Number:${contact.phone} , Email:${contact.email} ,  Message:${contact.message}`]
            }
          },
          "language": "en"
        }
      }
    ]
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  async function send(e) {
    e.preventDefault();
    if(contact.name.trim()!=="" && contact.email.trim()!=="" && contact.phone.trim()!=="" && contact.message.trim()!==""){
      await fetch("https://y3y9r9.api.infobip.com/whatsapp/1/message/template", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .then(()=>success("Sent Successfully"))
        .then(()=>setContact({ name: "", email: "", message: "", phone: "" }))
        .catch((error) => warning(error.message));
    }
    else{
      error("Fill all the details")
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setContact({ ...contact, [e.target.id]: e.target.value })
  }

  return (
    <div className={styles.ContactBox} id='contact'>
      <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
      <span className={styles.color}>Bhudeo Krit</span>
      <div className={styles.bigbox}>
        <div className={styles.formpart}>
          <div>
            <div className={styles.my}>My</div>
            <div className={styles.skill}>Contact</div>
            <div className={styles.form}>
              <form action="">
                <div className={styles.name}>
                  <label htmlFor="name">NAME</label><br />
                  <input type="text" id='name' placeholder='ENTER YOUR NAME' onChange={handleChange} value={contact.name} /><br />
                </div>
                <div className={styles.cont}>
                  <div>
                    <label htmlFor="phone">PHONE NUMBER</label><br />
                    <input type="text" id='phone' className={styles.number} placeholder='ENTER YOUR PHONE NUMBER' onChange={handleChange} value={contact.phone} />
                  </div>
                  <div>
                    <label htmlFor="email">EMAIL</label><br />
                    <input type="email" id='email' className={styles.email} placeholder='ENTER YOUR EMAIL ADDRESS' onChange={handleChange} value={contact.email} />
                  </div>
                </div>
                <div className={styles.message}>
                  <label htmlFor="message">YOUR MESSAGE</label><br />
                  <textarea name="" id="message" cols="30" rows="10" placeholder='ENTER YOUR MESSAGE' onChange={handleChange} value={contact.message}></textarea>
                </div>
                <button onClick={send}>SEND MESSAGE</button>
              </form>
            </div>
          </div>
          <div className={styles.pic}>
            <img src={picture} alt="Conpic" />
          </div>
        </div>
      </div>
    </div>
  )
}
