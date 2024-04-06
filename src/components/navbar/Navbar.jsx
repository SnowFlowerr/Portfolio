import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {


    return (
        <div className={styles.NavBox}>
            
            <div className={styles.title}>Portfolio</div>
            <div className={styles.list}>
                <a href="#/"><div>Home</div></a>
                <a href="#about"><div>About</div></a>
                <a href="#skills"><div >Skills</div></a>
                <a href="#project"><div>Projects</div></a>
                <a href="#contact"><div>Contact</div></a>
            </div>
        </div>
    )
}
