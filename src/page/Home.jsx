import React from 'react'
import "../css/home.css"
import Logos from "../img/me.jpg"



const Home = () => {
  return (
    <div className='home '>
       <div className="home_img">
          <img src={Logos} alt="" />
      </div>
      <div className="home_text">
        <div className='type'>
          <p>I'm Boboyor <span className='home_type'>Web Developer </span> </p>
          <p>I grew up in the Surkhandarya region of Uzbekistan, and now I am engaged in web programming</p>
           <button className='home_btn'><a href="/about">About</a></button>
        </div>
       
      </div>
     
   
    </div>
  )
}

export default Home
