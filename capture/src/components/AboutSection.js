import React from 'react';
import home1 from '../img/home1.png';
import {About, Description, Image, Hide} from '../styles';


const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span className="green">dreams</span></h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
        <p>Contact Us for your photo and video ideas</p>
          <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Man with camera"/>
      </Image>
    </About>
  );
};

export default AboutSection;

