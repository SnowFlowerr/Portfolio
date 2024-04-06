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
            Passionate and innovative web developer with [X years] of experience in crafting responsive, user-friendly websites and web applications. Proficient in a variety of programming languages including HTML5, CSS3, JavaScript, and frameworks such as React.js and Angular.js. Skilled in translating design concepts into clean, efficient, and maintainable code. Adept at collaborating with cross-functional teams to deliver high-quality projects on time and within budget. Committed to staying updated with emerging web technologies and industry trends. Eager to contribute expertise towards driving the success of dynamic web projects.</div>
          <div className={styles.aboutbtn}>
            <a href="#contact"><button>Contact Me</button></a>
            <a href="https://drive.google.com/file/d/1p3_u_hHenOLzoF_Ak2qgL5hDQEhUjDHI/view?usp=sharing" target='_blank' rel="noreferrer"><button>My Resume</button></a>
          </div>
        </div></div>
      </div>
    </div>
  )
}
