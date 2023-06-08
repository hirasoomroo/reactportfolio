import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/Resume.pdf"

import {
  faGithub,
  faLinkedin,
 
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "../styles/footer.css"

function Footer() {
  return (
    <div class="footer">
      
      <a href="https://www.linkedin.com/in/hira-soomro-3b9669249/"
        className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/hirasoomroo" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href={Resume} download 
      className="Resume"> Resume download</a>
      </div>
  );
}
      


export default Footer;