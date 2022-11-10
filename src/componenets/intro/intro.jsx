import React from 'react'
 import { init } from 'ityped'
 import { useEffect,useRef } from 'react'
import "./intro.scss"
import {AiOutlineDown} from 'react-icons/ai'
export default function Intro() {
  const textref = useRef()
  useEffect(()=>{
      console.log(textref.current)
     init(textref.current, {typeSpeed:  100, backDelay:  1500, showCursor: true, strings: ['Fullstack Devloper' ] })
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgcontainer">
          <img src="https://media.giphy.com/media/u1WhXLjwgcXpHJBMRM/giphy.gif"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>HI There, I'm</h2>
          <h1>Akash Poovan</h1>
          <h3>A <span ref={textref}></span></h3>
        </div>
        <a href="#portfolio">
          <AiOutlineDown className='down'/>
        </a>

    </div>
  </div>
  )
}
