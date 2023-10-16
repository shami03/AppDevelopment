import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PublisherDashboard.css'; 
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {Link} from 'react-router-dom';
import './Home.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import ContactForm from './ContactForm';
function PlayerHomepage() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const username = useSelector((state) => state.user.user);
  const userType = useSelector((state) => state.user.userType);
  const [games, setGames] = useState([

    {
      id: 1,
      title: "Wordle",
      publisher: "WGH",
      
      involvement: 85,
    },
    {
      id: 2,
      title: "Hint",
      publisher: "WGH",
      
      involvement: 92,
    },

  ]);

  useEffect(() => {
   
  }, []);

  const barChartData = games.map((game) => ({
    title: game.title,
    involvement: game.involvement,
    grade: game.grade,
  }));

  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
 }, []);
  return (
    <div id="player-homepage">
      <div className="overview">
        <h2>Welcome, {username}!</h2>
        <p>Your Player Dashboard</p>
      </div>

      <div className="dashboard-section">
        <div className="games-section">
          <h2>Recently played</h2>
          <table className="games-table">
            <thead>
              <tr>
                <th>GAME TITLE</th>
                <th>Publisher</th>
                
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.title}</td>
                  <td>{game.publisher}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="involvement-chart">
        <br></br>
          <h2>Involvement Chart</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="involvement" fill="#8884d8" name="Involvement" />
          </BarChart>
        </div>

      </div>
        <button class="btnx"><Link to ="/gamepage">Explore</Link></button>
        <br></br>
        <br></br>
        <br></br>
        
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
  );
}

export default PlayerHomepage;
