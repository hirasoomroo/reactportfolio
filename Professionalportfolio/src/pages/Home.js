import React from "react";
import "../styles/home.css"
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,300&family=Oswald:wght@500&family=Ubuntu:wght@500&display=swap');
</style>

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Welcome! My name is Hira Soomro.</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM,
              BootStrap, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, MySQL</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;