import React from 'react'
import "./about.scss"
export default function About() {
  return (
    <div className='about'>
        <div className="left">
            <div className="imgcontainer">
                <img src="assets/myphoto_png/man1.png" alt=""/>
            </div>
        </div>
        <div className="right" id='about'>
            <div className='titlecontainer'> <h2>About</h2> </div>
            <div className="paragraphCoantainer">
            <p>Hi I am Akash  I'm a mechanical engineering graduate, from my college days onwards i showed intrest in programming later that i taught by myself I complete Fullstack  projects using JavaScript, React, Express and Mongodb i always try solve the realworld issues using my programming skills I believe coding can help us to approach the problems in a different way, in real liffe scenario also yes! <b>Coding is a Life Skill!</b></p>
            </div>
        </div>
    </div>
  )
}
