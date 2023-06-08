import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaSchool } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import profilePhoto from "../assets/profilephoto.JPG";
import "../styles/about.css";

function Experience() {
  const [selectedSection, setSelectedSection] = useState("about");

  return (
    <div className="experience">
      <img src={profilePhoto} alt="Profile Photo" className="profile-photo" />

      <VerticalTimeline lineColor="#8B008B">
        <VerticalTimelineElement
          className="biography"
          iconStyle={{ background: "#3e497a", color: "#731963" }}
        >
          <div className="skills">
            <h1 className="text-3xl font-bold">Skills</h1>
            <ol className="list">
              <li className="item">
                <h2 className="text-xl">Front-End</h2>
                <span>
                  ReactJS, Redux, HTML, CSS, NPM, BootStrap,
                  TailwindCSS
                </span>
              </li>
              <li className="item">
                <h2 className="text-xl">Back-End</h2>
                <span>
                  NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
                  MySQL, MongoDB
                </span>
              </li>
              <li className="item">
                <h2 className="text-xl">Languages</h2>
                <span>JavaScript, MySQL</span>
              </li>
            </ol>
          </div>
          <h3 className="vertical-timeline-element-title">Hira S.</h3>
          <p>
            Hi! Welcome to my page. I am a full stack web developer who recently graduated from a full stack web development bootcamp at the University of California Irvine.
            I have worked in customer service for over 3 years before becoming an application specialist. After that, I worked in a closed-door pharmacy and urgent care,
            and I believe I have a well-rounded background. I am currently looking for full stack web developer jobs. This is my portfolio, feel free to take a look around
            and contact me under the contact section with any questions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--education ${
            selectedSection === "about" ? "selected" : ""
          }`}
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
          onClick={() => setSelectedSection("about")}
        >
          <h3 className="vertical-timeline-element-title">
            Redondo Union High School
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--education ${
            selectedSection === "skills" ? "selected" : ""
          }`}
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            University of California Irvine
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Psychology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${
            selectedSection === "projects" ? "selected" : ""
          }`}
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaNetworkWired />}
        >
          <h3 className="vertical-timeline-element-title">
            Applicant Support Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">El Segundo, CA</h4>
          <p>Government contractors looking for work.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${
            selectedSection === "projects" ? "selected" : ""
          }`}
          date="2020 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaNetworkWired />}
        >
          <h3 className="vertical-timeline-element-title">
            Honeybee Health pharmacy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>Closed Door Pharmacy; a new way to buy medicine.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
