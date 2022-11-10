import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen,setmenuopen}) {
  return (
    <div className={'menu '+(menuOpen && 'active')}>
        <ul>
            <li onClick={()=>{setmenuopen(false)}}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>{setmenuopen(false)}}>

                <a href="#portfolio">Portfolio</a>
            </li>
              <li onClick={()=>{setmenuopen(false)}}>

                <a href="#about">About</a>
            </li>
            <li onClick={()=>{setmenuopen(false)}}>

                <a href="#works">Works</a>
            </li>
             <li onClick={()=>{setmenuopen(false)}}>
                <a href="#skills">Skills</a>
            </li>
            <li onClick={()=>{setmenuopen(false)}}>

                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
