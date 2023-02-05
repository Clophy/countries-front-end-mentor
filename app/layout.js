"use client"
import Header from '@/components/header'
import '@/styles/global.css'
import React,{useState} from 'react'

export default function RootLayout({ children }) {
  const [darkMode , setDarkMode] = useState(false)
  return (
    <html lang="en">
      <head />
      <body className={darkMode ? "whitemode" : "darkmode"}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      {children}
      </body>
    </html>
  )
}
