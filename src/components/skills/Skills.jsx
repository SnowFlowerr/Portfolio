import React, { useEffect, useState } from 'react'
import styles from './Skills.module.css'


export default function Skills() {
  const [html, sethtml] = useState(92)
  const [css, setcss] = useState(80)
  const [js, setjs] = useState(85)
  const [java, setjava] = useState(75)
  const [react, setreact] = useState(82)
  const [node, setnode] = useState(70)
  const [express, setexpressn] = useState(72)
  const [mongo, setmongo] = useState(78)
  const [known, setKnown] = useState(100)

  function handleEnter(e) {
    e.preventDefault();
    if(known>=100){
      sethtml(0.2)
      setcss(0.2)
      setjava(0.2)
      setjs(0.2)
      setexpressn(0.2)
      setmongo(0.2)
      setreact(0.2)
      setnode(0.2)
      setKnown(0.2)
    }
  }
  useEffect(() => {
    if (html < 92 && html !== 0) {
      setTimeout(() => {
        sethtml(html + 0.2)
      }, 2)
    }
    if (css < 80 && css !== 0) {
      setTimeout(() => {
        setcss(css + 0.2)
      }, 2)
    }
    if (js < 85 && js !== 0) {
      setTimeout(() => {
        setjs(js + 0.2)
      }, 2)
    }
    if (java < 75 && java !== 0) {
      setTimeout(() => {
        setjava(java + 0.2)
      }, 2)
    }
    if (react < 82 && react !== 0) {
      setTimeout(() => {
        setreact(react + 0.2)
      }, 2)
    }
    if (node < 70 && node !== 0) {
      setTimeout(() => {
        setnode(node + 0.2)
      }, 2)
    }
    if (express < 72 && express !== 0) {
      setTimeout(() => {
        setexpressn(express + 0.2)
      }, 2)
    }
    if (mongo < 78 && mongo !== 0) {
      setTimeout(() => {
        setmongo(mongo + 0.2)
      }, 2)
    }
    if (known <= 100 && known !== 0) {
      setTimeout(() => {
        setKnown(known + 0.2)
      }, 2)
    }
  },[known])
  return (
    <div className={styles.SkillsBox} id='skills' onMouseEnter={handleEnter}>
      <span className={styles.color}>Bhudeo Krit</span>
      <div className={styles.bigbox}>
        <div className={styles.my}>My</div>
        <div className={styles.skill}>Skills</div>


        <div className={styles.box}>
          <div className={styles.lang}>
            <div className={styles.langbox}>
              <div className={styles.per}>
                <div className={styles.program}>HTML5</div>
                <div className={styles.percentage}>{Math.floor(html)}%</div>
              </div>
              <div><input type="range" name="" id="" max={100} readOnly value={html} /></div>
            </div>
            <div className={styles.langbox}>
              <div className={styles.per}>
                <div className={styles.program}>CSS</div>
                <div className={styles.percentage}>{Math.floor(css)}%</div>
              </div>
              <div><input type="range" name="" id="" max={100} readOnly value={css} /></div>
            </div>
          </div>
          <div className={styles.lang}>
            <div className={styles.langbox}>
              <div className={styles.per}>
                <div className={styles.program}>JavaScript</div>
                <div className={styles.percentage}>{Math.floor(js)}%</div>
              </div>
              <div><input type="range" name="" id="" max={100} readOnly value={js} /></div>
            </div>
            <div className={styles.langbox}>
              <div className={styles.per}>
                <div className={styles.program}>Java</div>
                <div className={styles.percentage}>{Math.floor(java)}%</div>
              </div>
              <div><input type="range" name="" id="" max={100} readOnly value={java} /></div>
            </div>
          </div>
          <div className={styles.lang}>
            <div className={styles.langbox}>
              <div className={styles.per}>
                <div className={styles.program}>Express-Js</div>
                <div className={styles.percentage}>{Math.floor(express)}%</div>
              </div>
              <div><input type="range" name="" id="" max={100} readOnly value={express} /></div>

            </div>
            <div className={styles.langbox}>
              <div className={styles.per}>
                <div className={styles.program}>Node-Js</div>
                <div className={styles.percentage}>{Math.floor(node)}%</div>
              </div>
              <div><input type="range" name="" id="" max={100} readOnly value={node} /></div>
            </div>
          </div>
          <div className={styles.lang}>
            <div className={styles.langbox}>
              <div className={styles.per}>
                <div className={styles.program}>React-JS</div>
                <div className={styles.percentage}>{Math.floor(react)}%</div>
              </div>
              <div><input type="range" name="" id="" max={100} readOnly value={react} /></div>
            </div>
            <div className={styles.langbox}>
              <div className={styles.per}>
                <div className={styles.program}>MongoDB</div>
                <div className={styles.percentage}>{Math.floor(mongo)}%</div>
              </div>
              <div><input type="range" name="" id="" max={100} readOnly value={mongo} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
