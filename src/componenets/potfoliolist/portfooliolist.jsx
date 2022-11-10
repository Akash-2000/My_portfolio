import React from 'react'
import "./portfoliolist.scss"

export default function Portfooliolist({title,active,setselected,id}) {
  return (
      <li className={active ? 'portfoliolist active':'portfoliolist'} onClick={()=>{setselected(id)}}>{title}</li>
  )
    
}
