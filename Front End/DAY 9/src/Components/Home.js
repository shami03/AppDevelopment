<<<<<<< HEAD
import React from 'react'
import "./Home.css"
import Layout from './Layout';
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faTasks } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const username=JSON.parse(localStorage.getItem("users")).username
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
  <div>
   
    
   <div className="sidebar-content">
     <div className="widget">
     <div className="widget-title1" >
               <Link to="/table">
                 <FontAwesomeIcon icon={faUser}/>  Player Details
               
               </Link>
             </div>
     <div className="widget-title2" >
               <Link to="/wordle">
               
                 <FontAwesomeIcon icon={faBook}/>  Analytics
               </Link>
             </div>
     <div className="widget-title3" >
               <Link to="/prof">
                 <FontAwesomeIcon icon={faTasks}/>  HighScores
               </Link>
             </div>
     <div className="widget-title4" >
               <Link to="/prof">
                 <FontAwesomeIcon icon={faClipboardList}/>  Settings
               </Link>
             </div>
     </div>
   </div>
 
</div>    
    <div className="parrent">
      <div className="nav-st">
        <input type="checkbox" id="expand-toggle" />
        <div className="tg-btn">
          <div className="relative">
            <div className="tg-btn-top" />
            <div className="tg-btn-middle" />
            <div className="tg-btn-bottom" />
            <label htmlFor="expand-toggle" id="expand-btn" />
          </div>
        </div>
        <div className="btn">
          <ul>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }}>
                <Link to="/login">Log In</Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-lg">
        <a href="#" className="brand" >
          <div id="long">
            <h4>
              <span className="fnt">
              Menu</span>
            </h4>
          </div>
        </a>
        <div className="btn">
          <ul>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
              {/* <Link to="/dashboard"> Dashboard</Link>  */}
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }}>
                More Games
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
                <Link to="/login">LogOut</Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%"}} >
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
      
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
      <div className="align">
        <div className="an-bd"><h6>
      </h6>
        </div>
      </div>
      
      {/*         Footer   */}
        <section id="footer">
          <hr />
          <div className="top">
            <div className="quick-links">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a >Home</a>
                </li>
                <li>
                  <a href="javascript:void();">
                  <Link to="/about">
                  About
                  </Link>             
                    </a>
                </li>
                <li>
                  <a href="javascript:void();">
                  <Link to="/FAQ">
                  FAQ
                  </Link>
                    
                  </a>
                </li>
                <li>
                  <a href="javascript:void();">
                  <Link to="/contact">
                  Contact Us
                  </Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className="quick-links">
              <h5>About Us</h5>
              <ul>
                
                <li>
                  <a >History</a>
                </li>
                <li>
                  <a >Our Team</a>
                </li>
                <li>
                  <a >Explore more games</a>
                </li>
              </ul>
            </div>
          
          </div>
          <div className="middle">
            <div className="so-med"></div>
            <div className="so-med"></div>
            <div className="so-med"></div>
            <div className="so-med"></div>
            <div className="so-med"></div>
          </div>
          <div className="bottom">
            COPYRIGHT © / <a>Terms of Service</a>
          </div>
        </section>
    </div>
  </div>
  )
}
=======
import React from 'react'
import "./Home.css"
import Layout from './Layout';
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faTasks } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const username=JSON.parse(localStorage.getItem("users")).username
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
  <div>
   
    
   <div className="sidebar-content">
     <div className="widget">
     <div className="widget-title1" >
               <Link to="/table">
                 <FontAwesomeIcon icon={faUser}/>  Player Details
               
               </Link>
             </div>
     <div className="widget-title2" >
               <Link to="/wordle">
               
                 <FontAwesomeIcon icon={faBook}/>  Analytics
               </Link>
             </div>
     <div className="widget-title3" >
               <Link to="/prof">
                 <FontAwesomeIcon icon={faTasks}/>  HighScores
               </Link>
             </div>
     <div className="widget-title4" >
               <Link to="/prof">
                 <FontAwesomeIcon icon={faClipboardList}/>  Settings
               </Link>
             </div>
     </div>
   </div>
 
</div>    
    <div className="parrent">
      <div className="nav-st">
        <input type="checkbox" id="expand-toggle" />
        <div className="tg-btn">
          <div className="relative">
            <div className="tg-btn-top" />
            <div className="tg-btn-middle" />
            <div className="tg-btn-bottom" />
            <label htmlFor="expand-toggle" id="expand-btn" />
          </div>
        </div>
        <div className="btn">
          <ul>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }}>
                <Link to="/login">Log In</Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-lg">
        <a href="#" className="brand" >
          <div id="long">
            <h4>
              <span className="fnt">
              Menu</span>
            </h4>
          </div>
        </a>
        <div className="btn">
          <ul>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
              {/* <Link to="/dashboard"> Dashboard</Link>  */}
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }}>
                More Games
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
                <Link to="/login">LogOut</Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%"}} >
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
      
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
      <div className="align">
        <div className="an-bd"><h6>
      </h6>
        </div>
      </div>
      
      {/*         Footer   */}
        <section id="footer">
          <hr />
          <div className="top">
            <div className="quick-links">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a >Home</a>
                </li>
                <li>
                  <a href="javascript:void();">
                  <Link to="/about">
                  About
                  </Link>             
                    </a>
                </li>
                <li>
                  <a href="javascript:void();">
                  <Link to="/FAQ">
                  FAQ
                  </Link>
                    
                  </a>
                </li>
                <li>
                  <a href="javascript:void();">
                  <Link to="/contact">
                  Contact Us
                  </Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className="quick-links">
              <h5>About Us</h5>
              <ul>
                
                <li>
                  <a >History</a>
                </li>
                <li>
                  <a >Our Team</a>
                </li>
                <li>
                  <a >Explore more games</a>
                </li>
              </ul>
            </div>
          
          </div>
          <div className="middle">
            <div className="so-med"></div>
            <div className="so-med"></div>
            <div className="so-med"></div>
            <div className="so-med"></div>
            <div className="so-med"></div>
          </div>
          <div className="bottom">
            COPYRIGHT © / <a>Terms of Service</a>
          </div>
        </section>
    </div>
  </div>
  )
}
>>>>>>> origin/main
