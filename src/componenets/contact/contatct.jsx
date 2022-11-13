import React, { useState } from 'react'
import './contact.scss'
import axios from 'axios'

export default function Contact() {
  const [Message,setmessage]= useState(false)
  const [email,setemail] = useState("")
  const[Messagetext,setmessagetext]=useState("")
  
  const handlemail = (e)=>{
      setemail(e.target.value)
      }
  const handletext = (e)=>{
    setmessagetext(e.target.value)
  }
  const handleSubmit  = (e)=>{
    e.preventDefault()
      console.log(email)
      console.log(Messagetext)
      const data = {
        email:email,
        Message:Messagetext
      }
      axios.post("https://portfoliomailer01.herokuapp.com/mess/sendmail",data).then((res)=>{
        console.log("im here")
        console.log(res.statusText)
        if(res.statusText == 'OK'){
          alert("Email sent sucessfully")
        }
      })
    setmessage(true)

  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/myphoto_png/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handlemail} placeholder='Email' />
          <textarea placeholder='Message' onChange={handletext}></textarea>
          <button type='submit'>Submit</button> 
          {Message && <span>Thanks for sending Email</span>}       
          </form>
      </div>
    </div>
  )
}
