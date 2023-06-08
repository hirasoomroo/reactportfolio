import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaSchool } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import profilePhoto from "../assets/profphoto.jpg";

function Experience() {
  const [selectedSection, setSelectedSection] = useState("about"); // Set the default selected section to "about"

  return (
    <div className="experience">
      <img src={profilePhoto} alt="Profile Photo" className="profile-photo" />

      <VerticalTimeline lineColor="#E9573F">
      <VerticalTimelineElement
          className= "biography"
          
          
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Who am I?
          </h3>
          <p>Hi! Welcome to my page. I am a full stack web developer who recently has graduate from a full stack web development bootcamp at University of California Irvine.
            I have worked in customer service for over 3 years before becoming an application specialist. After, I worked in a closed door pharmacy, urgent care,
            and I believe I have a well rounded background. I am looking for full stack web developer jobs now. This is my portfolio, feel free to take a look around 
            and contact me under the contact section with any questions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--education ${selectedSection === 'about' ? 'selected' : ''}`}
          
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
          onClick={() => setSelectedSection("About")}
        >
          <h3 className="vertical-timeline-element-title">
            Redondo Union High School
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--education ${selectedSection === 'skills' ? 'selected' : ''}`}
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
          className={`vertical-timeline-element--work ${selectedSection === 'projects' ? 'selected' : ''}`}
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaNetworkWired />}
          
        >
          <h3 className="vertical-timeline-element-title">
            Applicant Support Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            El Segundo, CA
          </h4>
          <p>Government contractors looking for work.</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${selectedSection === 'projects' ? 'selected' : ''}`}
          date="2020 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaNetworkWired />}
          
        >
          <h3 className="vertical-timeline-element-title">
            Honeybee Health pharmacy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>Closed Door Pharmacy; a new way to buy medicine.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
