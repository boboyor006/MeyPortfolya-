
import React from 'react'
import "../css/navbar.css"
import NavData from "../components/NavData.jsx"
import Logo from "../../public/logo.jpg"

const Navbar = () => {
  return (
    <div className="navbar" >
         <div className="navimgs">
          <img src={Logo} alt="" />
        </div>
      <ul className='navuli'>
      {NavData.map((val, key) => {
        return(
            <li key={key} 
                className='navli'
                onClick={() => {window.location.pathname = val.link;}}>


                <div id='icon'>{val.icons}</div> <div id='title'>{val.title}</div>
            </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Navbar; 
