import React from 'react'
import {BsMoon} from 'react-icons/bs'
import Styles from './header.module.css'

function Header({darkMode, setDarkMode}) {
  return (
    <>
        <header className={Styles.contain}>
            <div className={Styles.header}>
            <div className={Styles.logo}>
                <p>Where in the world?</p>
            </div>
            <div onClick={()=> setDarkMode(!darkMode)} className={Styles.dark}>
                <BsMoon/>
                <p>Dark Mode</p>
            </div>
            </div>
        </header>
    </>
  )
}

export default Header