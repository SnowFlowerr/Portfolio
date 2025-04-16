import React from 'react'
import styles from './About.module.css'
import pic from '../assets/WhatsApp_Image_2024-04-01_at_09.41.51-removebg-preview.jpg'

export default function About() {
  return (

    <div className={styles.AboutBox} id='about'>
      <div className={styles.pic}><img src={pic} alt="image1" />
        <div>
          <div className={styles.knowAbout}>
            <div className={styles.knowinfo}><span>Know</span><br /> About Me</div><br />
            <div className={styles.AboutSec}>
            <p>As an aspiring MERN stack developer with a strong foundation in HTML, CSS, JavaScript, Java, and ReactJS, I’m excited to begin my journey in the fast-paced world of full-stack web development. Through self-paced learning and hands-on projects, I discovered a deep passion for building modern, responsive applications that bring ideas to life from both the front and back end.</p>
            <p>What excites me most about working with the MERN stack is the ability to create complete, end-to-end solutions using a single language—JavaScript. I’m continuously exploring new tools, frameworks, and best practices to stay ahead of the curve and sharpen my skills. With every project, I strive to push my limits, learn something new, and deliver clean, efficient, and impactful web experiences.</p>
            
            </div>
          <div className={styles.aboutbtn}>
            <a href="#contact"><button>Contact Me</button></a>
            <a href="https://drive.google.com/file/d/1otR5rIWgGzp3gmAWPyLWEtCa2TazLCzN/view?usp=sharing" target='_blank' rel="noreferrer"><button>My Resume</button></a>
          </div>
        </div></div>
      </div>
    </div>
  )
}
