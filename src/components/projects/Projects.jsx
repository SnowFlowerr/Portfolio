import React from 'react'
import styles from './Projects.module.css'

export default function Projects() {

  function Enterhabbit() {
    document.getElementById('links1').style.backgroundColor = "white"
    document.getElementById('links2').style.backgroundColor = "white"
    document.getElementById('links1').style.color = "rgb(4, 0, 38)"
    document.getElementById('links2').style.color = "rgb(4, 0, 38)"
  }
  function Leavehabbit() {
    document.getElementById('links1').style.backgroundColor = "transparent"
    document.getElementById('links1').style.color = "transparent"
    document.getElementById('links2').style.backgroundColor = "transparent"
    document.getElementById('links2').style.color = "transparent"
  }
  function Enterquiz() {
    document.getElementById('links3').style.backgroundColor = "white"
    document.getElementById('links4').style.backgroundColor = "white"
    document.getElementById('links3').style.color = "rgb(4, 0, 38)"
    document.getElementById('links4').style.color = "rgb(4, 0, 38)"
  }
  function Leavequiz() {
    document.getElementById('links3').style.backgroundColor = "transparent"
    document.getElementById('links3').style.color = "transparent"
    document.getElementById('links4').style.backgroundColor = "transparent"
    document.getElementById('links4').style.color = "transparent"
  }
  function Entertechi() {
    document.getElementById('links5').style.backgroundColor = "white"
    document.getElementById('links6').style.backgroundColor = "white"
    document.getElementById('links5').style.color = "rgb(4, 0, 38)"
    document.getElementById('links6').style.color = "rgb(4, 0, 38)"
  }
  function Leavetechi() {
    document.getElementById('links5').style.backgroundColor = "transparent"
    document.getElementById('links5').style.color = "transparent"
    document.getElementById('links6').style.backgroundColor = "transparent"
    document.getElementById('links6').style.color = "transparent"
  }
  function Enterweather() {
    document.getElementById('links7').style.backgroundColor = "white"
    document.getElementById('links8').style.backgroundColor = "white"
    document.getElementById('links7').style.color = "rgb(4, 0, 38)"
    document.getElementById('links8').style.color = "rgb(4, 0, 38)"
  }
  function Leaveweather() {
    document.getElementById('links7').style.backgroundColor = "transparent"
    document.getElementById('links7').style.color = "transparent"
    document.getElementById('links8').style.backgroundColor = "transparent"
    document.getElementById('links8').style.color = "transparent"
  }
  function Entersign() {
    document.getElementById('links9').style.backgroundColor = "white"
    document.getElementById('links10').style.backgroundColor = "white"
    document.getElementById('links9').style.color = "rgb(4, 0, 38)"
    document.getElementById('links10').style.color = "rgb(4, 0, 38)"
  }
  function Leavesign() {
    document.getElementById('links9').style.backgroundColor = "transparent"
    document.getElementById('links9').style.color = "transparent"
    document.getElementById('links10').style.backgroundColor = "transparent"
    document.getElementById('links10').style.color = "transparent"
  }
  function Enternote() {
    document.getElementById('links11').style.backgroundColor = "white"
    document.getElementById('links12').style.backgroundColor = "white"
    document.getElementById('links11').style.color = "rgb(4, 0, 38)"
    document.getElementById('links12').style.color = "rgb(4, 0, 38)"
  }
  function Leavenote() {
    document.getElementById('links11').style.backgroundColor = "transparent"
    document.getElementById('links11').style.color = "transparent"
    document.getElementById('links12').style.backgroundColor = "transparent"
    document.getElementById('links12').style.color = "transparent"
  }
  return (
    <div className={styles.ProjectBox} id='project'>
      <div className={styles.color}>Bhudeo Krit</div>
      <div className={styles.bigbox}>
        <div className={styles.my}>My</div>
        <div className={styles.mypro}>Projects</div>
        <div className={styles.proj}>
          <div className={styles.habbit}>
            <div className={styles.protext} onMouseEnter={Enterhabbit} onMouseLeave={Leavehabbit}>
              <a href="https://github.com/SnowFlowerr/Habbit-Maker" target='_blank'><div className={styles.github} id='links1'><i class="fa-brands fa-github"></i></div></a>
              <a href="https://habbit-maker.vercel.app/" target='_blank'><div className={styles.open} id='links2'><i class="fa-solid fa-up-right-from-square"></i></div></a>
            </div>
          </div>
          <div className={styles.quiz}>
          <div className={styles.protext} onMouseEnter={Enterquiz} onMouseLeave={Leavequiz}>
              <a href="https://github.com/SnowFlowerr/Quiz-Time" target='_blank'><div className={styles.github} id='links3'><i class="fa-brands fa-github"></i></div></a>
              <a href="https://quiz-time-ten.vercel.app/" target='_blank'><div className={styles.open} id='links4'><i class="fa-solid fa-up-right-from-square"></i></div></a>
            </div>
          </div>
          <div className={styles.techi}>
          <div className={styles.protext} onMouseEnter={Entertechi} onMouseLeave={Leavetechi}>
              <a href="https://github.com/SnowFlowerr/TechiSpot1" target='_blank'><div className={styles.github} id='links5'><i class="fa-brands fa-github"></i></div></a>
              <a href="https://techi-spot-fawn.vercel.app/" target='_blank'><div className={styles.open} id='links6'><i class="fa-solid fa-up-right-from-square"></i></div></a>
            </div>
          </div>
        </div>
        <div className={styles.proj}>
          <div className={styles.weather}>
          <div className={styles.protext} onMouseEnter={Enterweather} onMouseLeave={Leaveweather}>
              <a href="https://github.com/SnowFlowerr/Weather-App" target='_blank'><div className={styles.github} id='links7'><i class="fa-brands fa-github"></i></div></a>
              <a href="https://weather-app-flame-xi.vercel.app/" target='_blank'><div className={styles.open} id='links8'><i class="fa-solid fa-up-right-from-square"></i></div></a>
            </div>
          </div>
          <div className={styles.sign}>
          <div className={styles.protext} onMouseEnter={Entersign} onMouseLeave={Leavesign}>
              <a href="https://github.com/SnowFlowerr/Sign-in-Page" target='_blank'><div className={styles.github} id='links9'><i class="fa-brands fa-github"></i></div></a>
              <a href="https://sign-in-page-jade.vercel.app/" target='_blank'><div className={styles.open} id='links10'><i class="fa-solid fa-up-right-from-square"></i></div></a>
            </div>
          </div>
          <div className={styles.note}>
          <div className={styles.protext} onMouseEnter={Enternote} onMouseLeave={Leavenote}>
              <a href="https://github.com/SnowFlowerr/Notes-Maker" target='_blank'><div className={styles.github} id='links11'><i class="fa-brands fa-github"></i></div></a>
              <a href="https://notes-maker-hazel.vercel.app/" target='_blank'><div className={styles.open} id='links12'><i class="fa-solid fa-up-right-from-square"></i></div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
