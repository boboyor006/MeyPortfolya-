import React from 'react';
import "../css/about.css";
import Me from "../img/me.jpg";
import Javas from "../img/Script.png";
import Reacts from "../img/React.svg";
import Nexts from "../img/Next.png";
import Bos from "../img/Bos.png";

const About = () => {
  return (
    <div className='about'>
      <div className="about_laters">
        <div className="about_img">
          <img src={Me} alt="Me" />
        </div>
        <div className="about_text">
          <div className="about__texts">
            <p>
              Hello, my name is Boboyar. I was born in the Surkhandarya region of Uzbekistan.
              I have been working in frontend programming for 1 year and 8 months. The programs I know
              are Html, css, Sass, JavaScript and React.js, I also have skills like TypeScript, Next.js,
              Bootstrap... I'm still a junior developer.
            </p>
            <button><a href="/skills">Skills</a></button>
          </div>
        </div>
      </div>
      <div className="about_logos">
        <img src={Javas} alt="JavaScript" />
        <img src={Reacts} alt="React" />
        <img src={Nexts} alt="Next.js" />
        <img src={Bos} alt="Bootstrap" />
      </div>
    </div>
  );
};

export default About;
