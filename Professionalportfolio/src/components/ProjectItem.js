import React from "react";


function ProjectItem({ image, name }) {
  
  return (
    <div
      className="projectItem">
      
      <img src = {image} className= "projectImage" ></img>
      <h1> <a href="https://github.com/hirasoomroo">{name} </a>
      </h1>
    </div>

 
  );
    }

export default ProjectItem;