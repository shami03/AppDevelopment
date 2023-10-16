import React, { useState } from 'react'
import "./Home.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
function Home() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div class="home">
    <div class="bg">
    <img class="bg-img" src="https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais"/>
    <div class="text-over-img"><div id="text-container">
     WELCOME !
    <div id="flip">
      <div><div>For</div></div>
      <div><div>Gamers</div></div>
      <div><div>Hardcode</div></div>
    </div>
    Start Your Gaming Journey here!
  </div>
    
  <div className='cont'>
  <div class="qoutes">"The immersive nature of video games stimulates critical thinking and strategic planning."
 <br></br> <button class="btn1"><Link to ="/games">Explore</Link></button>
  <button class="btn2">Quick Play</button>
  </div>
  </div>
  </div>
  
</div>

<div class="footer">
<div class="inner-footer">

  <div class="footer-items">
    <h1>Word Game Hub </h1>
    <p>Get you gaming journey started here</p>
  </div>

  <div class="footer-items">
    <h2>HELP</h2>
    <div class="border1"></div> 
      <ul>
        <a href="/"><li>Home</li></a>
       <li class="con" onClick={togglePopup}>Contact  </li>
        {isOpen && <ContactForm
          content={<>
            <b>CONTACT FORM</b>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Name"/>
            <input type="text" id="message" placeholder="Enter your query"/>
            <input class="submit-btn" type="button" placeholder='Submit' value="Submit"/>
          </>}
          handleClose={togglePopup} />}
        
        <a href="#"><Link to="/about"><li>About</li></Link></a>
        <a href="#"><Link to="/faq"><li>FAQ</li></Link></a>
      </ul>
  </div>

  <div class="footer-items">
    <h2>Socials</h2>
    <div class="border1"></div>  
      <ul>
      
      <a href="https://www.instagram.com" target="_blank"><InstagramIcon/>  Instagram</a>
      <a href="https://www.facebook.com" target="_blank"><FacebookIcon/> Facebook</a>
      <a href="https://www.youtube.com" target="_blank"><YouTubeIcon/> Youtube</a>
      <a target="_blank" href="https://www.google.com/search?q=wgh&sca_esv=567825245&sxsrf=AM9HkKmRuNW70asoWvBf7JX3EQYDuUZ4EQ%3A1695462414813&ei=DrQOZYObMf6u2roPjeKOyAY&ved=0ahUKEwiD2tvXucCBAxV-l1YBHQ2xA2kQ4dUDCBA&uact=5&oq=miniature+player+portal&gs_lp=Egxnd3Mtd2l6LXNlcnAiGG1pbmlhdHVyZSBzdHVkZW50IHBvcnRhbDIFECEYoAFItTNQswZYljBwAXgBkAEAmAHQAaABqRCqAQYwLjE0LjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIKEAAYigUYsAMYQ8ICChAAGIoFGLEDGEPCAgoQLhiKBRixAxhDwgINEAAYigUYsQMYgwEYQ8ICBxAAGIoFGEPCAgUQABiABMICCBAuGIAEGLEDwgIIEAAYgAQYyQPCAggQABiKBRiRAsICBhAAGBYYHsICBxAAGA0YgATCAggQABgWGB4YD8ICCBAAGB4YDRgPwgIIEAAYBRgeGA3CAggQABgIGB4YDcICCBAAGIoFGIYDwgIHECEYoAEYCuIDBBgAIEGIBgGQBgo&sclient=gws-wiz-serp"><GoogleIcon/> Google</a>
    
      </ul>
  </div>
  <div class="footer-items">
    <h2>Contact Us</h2>
    <div class="border1"></div>
      <ul>
        <li><LocationOnIcon/>Unity ave, Game city</li>
        <li><a href="tel:0422222666"><PhoneIcon/> 202 345 2343</a></li>
        <li><a href="mailto:feedback@wgh.com"><AlternateEmailIcon/> contact@wgh.com</a></li>
      </ul> 

      
  </div>
</div>

<div class="footer-bottom">
  Copyright &copy;  Word game Hub 2023.<b class="u1"><Link to="/terms">Terms and Conditons</Link> </b><b class="u2"><Link to="/privacy">Privacy Policy</Link></b>
</div>
</div>
    </div>
  )
}

export default Home