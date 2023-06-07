import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {FaSchool} from 'react-icons/fa'
import {FaNetworkWired} from 'react-icons/fa'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Redondo Union High School
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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

          <p> Psychology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2019"
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

       
      </VerticalTimeline>
    </div>
  );
}

export default Experience;