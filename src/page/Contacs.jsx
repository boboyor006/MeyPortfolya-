import React from 'react'
import "../css/contacs.css"
import Conts from "../img/Contacpage.png"
// import "../data/Msg.js"
import Reac, {useState} from "react"
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contacs = () => {


  
  return (
    <div className='Contacs'>
        <div className="contac_img">
          <img src={Conts} alt="" />
        </div>
      <div className="contac_id">
        <div className="contac_text">
          <h3>Hi everyone, you can contact me via telegram. Send me your name and phone number and I will get back to you soon.</h3>
        </div>
        <div className="msge">
          <TelegramIcon/><a href="https://xn--80affa3aj0al.xn--80asehdb/web/#@Polatov0555">@Polatov0555</a>
          <EmailIcon/> <a href="https://mail.google.com/mail/u/0/#inbox">temurp0555</a>
          <CallIcon/> <p>+998 90 225 10 22</p>
      </div>
      </div>
     
    </div>
  )
}

export default Contacs
