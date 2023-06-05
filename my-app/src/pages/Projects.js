import React from "react";


import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <FaFacebookSquare/>
          <FaTwitter/>
          <FaGithubSquare/>
        </div>
        <p> &copy; 2023 Hira Soomro.</p>
      </div>
    );
  }
  
  export default Footer;