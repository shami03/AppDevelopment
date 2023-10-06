<<<<<<< HEAD
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faTasks } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css"
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';

export default function Dashboard() {
  const nav=useNavigate();
  const navanaly=()=>{
    nav('/wordle')
  }
  return (
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
                  <div onClick={navanaly()}>
                    <FontAwesomeIcon icon={faBook}/>  Analytics</div>
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
  )
}
=======
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faTasks } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css"
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';

export default function Dashboard() {
  const nav=useNavigate();
  const navanaly=()=>{
    nav('/wordle')
  }
  return (
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
                  <div onClick={navanaly()}>
                    <FontAwesomeIcon icon={faBook}/>  Analytics</div>
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
  )
}
>>>>>>> origin/main
