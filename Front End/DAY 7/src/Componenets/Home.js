import React from 'react'
import "./Home.css"
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';

export default function Home() {
  const username=JSON.parse(localStorage.getItem("users")).username
  return (
    <div >
    {/*   Navbar   */}
    
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
              <span className="fnt">Menu</span>
            </h4>
          </div>
        </a>
        <div className="btn">
          <ul>
            <li>
              <a
                href="#"
                style={{ display: "block", width: "100%", height: "100%" }} >
              <Link to="/dashboard"> Dashboard</Link> 
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
      {username}
      {/* body Contents */}
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
                <a href="javascript:void();">About</a>
              </li>
              <li>
                <a href="javascript:void();">FAQ</a>
              </li>
              <li>
                <a href="javascript:void();">Get Started</a>
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
