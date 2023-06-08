import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem">
      
      <img src = {image} className= "projectImage" ></img>
      <h1> <a href="https://github.com/hirasoomroo/Editorinprogress">{name} </a>
      </h1>
    </div>

 
  );
    }

export default ProjectItem;