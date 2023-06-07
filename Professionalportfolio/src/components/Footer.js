import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
 
} from "@fortawesome/free-brands-svg-icons";
import React from "react";


function Footer() {
  return (
    <div class="footer">
      <h3>Github</h3>
      <a href="https://www.linkedin.com/in/hira-soomro-3b9669249/"
        className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/hirasoomroo" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
</div>
  );
}

export default Footer;