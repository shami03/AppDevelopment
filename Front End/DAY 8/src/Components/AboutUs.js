<<<<<<< HEAD
import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const TeamMember = ({ name, role, description, email }) => (
  <div className="column">
    <div className="card">
      <img
        src={`https://via.placeholder.com/500?text=${name}`} 
        alt={`Image of ${name}`}
        style={{ width: '100%' }}
      />
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>{name}</h2>
        <p className="title">{role}</p>
        <p className='clrr'>{description}</p>
        <p>{email}</p>
        <p>
          <button className="button">Contact</button>
        </p>
      </div>
    </div>
  </div>
  
);

const AboutUs = () => (
  
  <div><div>
    <div className="about-section">
      <h1>About Us</h1>
      <p style={{ fontFamily: 'Oxygen, sans-serif' }}>
        Welcome to Word Game Hub, your go-to destination for word game enthusiasts. We are passionate about word games and dedicated to bringing you the best word gaming experience.
      </p>
      <p style={{ fontFamily: 'Oxygen, sans-serif' }}>
        Whether you're a crossword connoisseur, a Scrabble strategist, or you simply love word puzzles, Word Game Hub is your playground for all things wordy.
      </p>
    </div>

    <h2 style={{ textAlign: 'center' }}>Our Team</h2>

    <div className="row">
      <TeamMember
        name="Mutharasu"
        role="React Developer"
        email="muth@gmail.com"
      />

      <TeamMember
        name="Sharankumar"
        role="React Developer"
        email="shar@gmail.com"
      />

      <TeamMember
        name="Shamiksha"
        role="Designer"
        email="sham@gmail.com"
      />
    </div>
  </div>
  <div>
  <br></br><br></br>
  <Link to="/home">
    <button className='buttn'>
        Home
    
    </button>
  </Link>
  </div>
  </div>
);

export default AboutUs;
=======
import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const TeamMember = ({ name, role, description, email }) => (
  <div className="column">
    <div className="card">
      <img
        src={`https://via.placeholder.com/500?text=${name}`} 
        alt={`Image of ${name}`}
        style={{ width: '100%' }}
      />
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>{name}</h2>
        <p className="title">{role}</p>
        <p className='clrr'>{description}</p>
        <p>{email}</p>
        <p>
          <button className="button">Contact</button>
        </p>
      </div>
    </div>
  </div>
  
);

const AboutUs = () => (
  
  <div><div>
    <div className="about-section">
      <h1>About Us</h1>
      <p style={{ fontFamily: 'Oxygen, sans-serif' }}>
        Welcome to Word Game Hub, your go-to destination for word game enthusiasts. We are passionate about word games and dedicated to bringing you the best word gaming experience.
      </p>
      <p style={{ fontFamily: 'Oxygen, sans-serif' }}>
        Whether you're a crossword connoisseur, a Scrabble strategist, or you simply love word puzzles, Word Game Hub is your playground for all things wordy.
      </p>
    </div>

    <h2 style={{ textAlign: 'center' }}>Our Team</h2>

    <div className="row">
      <TeamMember
        name="Mutharasu"
        role="React Developer"
        email="muth@gmail.com"
      />

      <TeamMember
        name="Sharankumar"
        role="React Developer"
        email="shar@gmail.com"
      />

      <TeamMember
        name="Shamiksha"
        role="Designer"
        email="sham@gmail.com"
      />
    </div>
  </div>
  <div>
  <br></br><br></br>
  <Link to="/home">
    <button className='buttn'>
        Home
    
    </button>
  </Link>
  </div>
  </div>
);

export default AboutUs;
>>>>>>> origin/main
