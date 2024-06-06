import React from 'react'
import "../css/footer.css";
import imgs from "../img/sapiens.jpg"

const Footer = () => {
  return (
    <div className='footer'>
     
        <div className="footer_text">
            <div className="footer_ul">
              <ul>
                <li><a href="https://react.dev/">React.js</a></li>
                <li><a href="https://javascript.info/">Java Script</a></li>
                <li><a href="https://nextjs.org/">Next.js</a></li>
                <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
              </ul>
            </div>
            <button ><a href="/skills">Home</a></button>
        </div>
    
        <div className="footer_logo">
              <img src={imgs}  height="200px"  alt="" />
        </div>
    </div>
  )
}

export default Footer;
