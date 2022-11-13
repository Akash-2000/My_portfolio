import React, { useState } from 'react'
import "./works.scss";
import {BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom';


export default function Works() {
  const [currentSlider,setcurrentSlider] = useState(0)
  const data = [
       {
      id: "1",
      icon: "assets/myphoto_png/mobile.png",
      title: "Educational Website",
      desc:
        "It is an educational website which contains programming languages tutorials handpicked from youtube.",
      img:
        "assets/myphoto_png/Screenshot (24).png" ,
      github:"https://github.com/Akash-2000/EdUcational-website",
      link:"https://revildocode.netlify.app/",
      
    },
    {
      id: "2",
      icon: "assets/myphoto_png/globe.png",
      title: "Portfolio with Parallax Effect",
      desc:
        "Simple portfolio with parallax effect it is very useful for the beginers",
      img:
        "assets/myphoto_png/Screenshot (40).png",
      github:"https://github.com/Akash-2000/Project_deploy",
      link:"https://cosmic-biscochitos-ab7906.netlify.app/",
    },
    {
      id: "3",
      icon: "assets/myphoto_png/writing.png",
      title: "Student-staff Course Selection",
      desc:
        "In this website staffs can register themseleves with their prefferd subjects students can enroll based on their intrest using a simple CRUD",
      img:
        "assets/myphoto_png/Screenshot (41).png",
      github:"https://github.com/Akash-2000/Student-Course-registration",
         link:"https://heartfelt-zabaione-975ef2.netlify.app/", 
    },
     {
      id: "4",
      icon: "assets/myphoto_png/writing.png",
      title: "Mini Job Portal",
      desc:
        "Using this website freelancers can post their skills and owners can see and select the freelancers they want based on the ",
      img:
        "assets/myphoto_png/Screenshot (43).png",
        github: "https://github.com/Akash-2000/Project_deploy",
         link:" https://domanicer.netlify.app/", 
    },
   
  ]
  const handleco = ()=>{
    console.log("button clicked")
  }
  const handleClick = (way)=>{
      way === 'left' ? setcurrentSlider(currentSlider >0? currentSlider-1: 2) :
      setcurrentSlider(currentSlider < data.length -1 ?currentSlider+1:0)
  }
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlider*100}vw)`}}>
       {data.map(d=>( <div className="container">
      <div className="item">
        <div className="left">
            <div className="leftContainer">
              <div className="top">
              <div className="imgContainer">
                <BsGithub className='icons'/>
              </div>
                <a className='viewcode'href={d.github}>VIEW CODE</a>
              </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              <button onClick={()=>(window.location.href=d.link)}>Learn More</button>
            </div>
          </div>
        <div className="right">
          <img src={d.img} alt=""/>
        </div>
      </div>
        </div>
       ))
  }
      </div>
      <img src="assets/myphoto_png/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")} />
      <img src="assets/myphoto_png/arrow.png" className='arrow right' alt="" onClick={()=>handleClick("right")} />
    </div>
  )
}
