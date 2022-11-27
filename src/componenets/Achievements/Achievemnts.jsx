import React from 'react'
import "./Achievements.scss"
export default function Achievemnts() {
    const achieved  = [
        {
            id:"1",
            Title:"Responsive Web Design",
            image:"assets/myphoto_png/responsiveweb.jpeg",
            link:"https://www.freecodecamp.org/certification/fccf66e8e89-4ebf-4343-b5ff-219ee16854a8/responsive-web-design"

        },
        {
            id:"2",
            Title:"JavaScript Algorithms and Data Structures",
            image:"assets/myphoto_png/javascript.jpeg",
            link:"https://www.freecodecamp.org/certification/fccf66e8e89-4ebf-4343-b5ff-219ee16854a8/javascript-algorithms-and-data-structures"
        },
        {
            id:"3",
            Title:"Front End Development Libraries",
            image:"assets/myphoto_png/frontend.png",
            link:"https://www.freecodecamp.org/certification/fccf66e8e89-4ebf-4343-b5ff-219ee16854a8/front-end-development-libraries"
        }
    ]

  return (

    <div className='Achievemnts' id="Achieve">
         <div className="title">
        <h1>My Certificates</h1>
    </div>
    <div className="certificate">
        {achieved.map((e)=>(
                <div className="certificatecontainer">
            <div className="top">
                <img src={e.image} alt="" />
            </div>
            <div className="bottom">
                <h2>{e.Title}</h2>
                <h3><a href={e.link}>View Certifiacte</a></h3>
            </div>
        </div>
        ))}
    </div>
         
    </div>
  )
}
