
import "./GamePage.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import ContactForm from './Components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const games = [
    {
      title: "Wordle",
      description: "Guess the word in this fun game.",
      imageSrc: "data:image/png;base64,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", // Replace with the actual image URL
      linkTo: "/wordle",
    },
    {
      title: "Guess the Word",
      description: "Challenge your vocabulary skills.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxvIVI5rqDcsR-F4H9qfdLzf6ROCKYZorSQ&usqp=CAU", // Replace with the actual image URL
      linkTo: "/hint",
    },
  ];
  return (
    <div >
    
    <div className="parrent">
      
      
      <div className="align">
  <div className="an-bd">
    {/* Game Card Buttons */}
    <div className="game-cards">
      {games.map((game, index) => (
        <Link to={game.linkTo} key={index} className="game-card">
          <img src={game.imageSrc} alt={game.title} className="game-image" />
          <h2 className="game-title">{game.title}</h2>
          <p className="game-description">{game.description}</p>
        </Link>
      ))}
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
