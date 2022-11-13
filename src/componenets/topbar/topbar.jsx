import React from 'react'
import "./topbar.scss"
import {BsFillPersonFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
export default function topbar({menuOpen,setmenuopen}) {
  return (
    <div className={'topbar '+ (menuOpen && 'active')}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className='logo'>Akash</a>
            <div className="itemContainer">
              <BsFillPersonFill className='icon'/>
              <span>+91 8220553838</span>
            </div>
           <div className="itemContainer">
              <GrMail className='icon'/>
              <span> akashpoovan983@gmail.com</span>
            </div>
          </div>
          
          <div className="right">
            <div className="hamburger" onClick={()=>{setmenuopen(!menuOpen)}}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
    </div>
  )
}
