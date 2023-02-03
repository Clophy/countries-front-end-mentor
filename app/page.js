"use client"
import Header from '@/components/header'
import Main from '@/components/main'
import {Nunito_Sans } from '@next/font/google'
import React,{useState} from 'react'

const nunito = Nunito_Sans({ subsets: ['latin'], weight:["300","600","800"] })



export default function Home() {
  
    const [darkMode , setDarkMode] = useState(false)
  return (
    <>
    <main className={darkMode ? "whitemode" : "darkmode"}>
    <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
    <Main nunito={nunito}/>
    </main>
    </>
  )
}
