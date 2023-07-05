import React, { useState } from 'react';
import './index.css';
import Home from './links/Home';
import About from './links/About';
import Contact from './links/Contact';
import Main from './main';
import { FaSnapchat } from "react-icons/fa";
import { FaCoffee } from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';



function App() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link, e) => {
    e.preventDefault();
    setActiveLink(link);
  };

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle} className='color'>
      <nav>
        <a
          id='Sep'
          href='/Page'
          onClick={(e) => handleLinkClick('page', e)}
          className={activeLink === 'page' ? 'active' : ''}>
          Portfolio
        </a>
        <ul>
          <li>
            <a
              href='/Home'
              onClick={(e) => handleLinkClick('home', e)}
              className={activeLink === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/About'
              onClick={(e) => handleLinkClick('about', e)}
              className={activeLink === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='/Contact'
              onClick={(e) => handleLinkClick('contact', e)}
              className={activeLink === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='container'>
        {activeLink === 'home' && <Home />}
        {activeLink === 'about' && <About />}
        {activeLink === 'contact' && <Contact />}
        {activeLink === 'page' && <Main />}
        {!activeLink && (
          <div className='section'>
            <h1 id='Ani'>Hello</h1>
            <p style={{margin : '25px'}}>Here you can find all my details using links 📑📑</p>
            <p>I am Arshan Khan, a web developer passionate about creating amazing websites.</p>
            <div className='image-container'>
              <img src={process.env.PUBLIC_URL + '/Self.jpg'} alt='Self' />
            </div>
            <footer className="footer">
  <div className="footer-content">
    <p>&copy; {new Date().getFullYear()} Your Website</p>
    <p>Made with <FaCoffee /> by Arshan Khan</p>
    <h2>Things you can contact me on:</h2>
    <div className="social-icons">
      <a href="insta"><FaInstagram /></a>
      <a href="snap"><FaSnapchat /></a>
      <a href="linkedin "><FaLinkedin /></a>
      <a href="face"><FaFacebook /></a>
    </div>
  </div>
</footer>

          </div>
          
        )}
      </div>
    </div>
  );
}

export default App;
