import React from "react";
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,300&family=Oswald:wght@500&family=Ubuntu:wght@500&display=swap');
</style>

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