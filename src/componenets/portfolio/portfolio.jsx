import React, { useEffect, useState } from 'react'
import "./portfolio.scss"
import Portfooliolist from '../potfoliolist/portfooliolist'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected,setselected] = useState("featured")
  const [data,setdata] = useState([])
  const list = [
          {
            id:'featured',
            title:'featured',
          },
          {
            id:'Web App',
            title:'Web App',
          },
          {
            id:'Design',
            title:'Design',
          },
          ]
          useEffect(()=>{
              switch(selected){
                case "featured":
                  setdata(featuredPortfolio)
                  break;
                case "Web App":
                  setdata(webPortfolio)
                  break;
                case "Mobile App":
                  setdata(mobilePortfolio)
                  break;
                case "Design":
                  setdata(designPortfolio)
                  break;
                case "content":
                  setdata(contentPortfolio)
                  break;
                case "featured":
                  setdata(featuredPortfolio)
                  break;
                  default:
                  setdata(featuredPortfolio)
                    
              }
          },[selected])
  return (
    <div className='portfolio' id="portfolio">
        <h1>Portfolio</h1>
        <ul>
        {list.map((item)=><Portfooliolist title={item.title} active={selected === item.id} setselected={setselected} id={item.id}/>)}
        </ul>
        <div className="container">
         {data.map((datalist)=>(
          <div className="item">
              <img src={datalist.img} alt=""/>
              <h3>{datalist.title}</h3>
          </div>
         ))}
        </div>
    </div>
  )
}
