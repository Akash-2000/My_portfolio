import React from 'react'
import "./menu.scss"
import {FaGithub} from 'react-icons/fa'


export default function Menu({menuOpen,setmenuopen}) {
  return (
    <div className={'menu '+(menuOpen && 'active')}>
        <ul>
            <li onClick={()=>{setmenuopen(false)}}>
                <a href="#intro">Home</a>
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
                <a href="#Achieve">Achievments</a>
            </li>
            <li onClick={()=>{setmenuopen(false)}}>

                <a href="#contact">Contact</a>
            </li>
            <li className='baby'>
             <FaGithub className='icon'/>
              <span onClick={()=>(window.location.href="https://github.com/Akash-2000")}>Akash-2000</span>
            </li>
        </ul>
    </div>
  )
}
