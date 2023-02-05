"use client"
import React,{useState} from 'react'
import Main from '@/components/main'
import {Nunito_Sans } from '@next/font/google'

const nunito = Nunito_Sans({ subsets: ['latin'], weight:["300","600","800"] })



export default function Home() {
    
  return (
    <>
    <main >
    <Main nunito={nunito}/>
    </main>
    </>
  )
}
