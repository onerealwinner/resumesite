import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Western Governors University - Bachelor of Science",
    years: "2021 - 2021",
    content:
      "Earned 4-year degree in 5 months, driven to excel, dedicated all nearly free hours to studies.",
  },
  {
    id: 2,
    title: "ITIL Foundation Level",
    years: "2021 - 2021",
    content:
      "Covers fundamental concepts and elements of ITIL.  This helps put perspective on IT processes and support.",
  },
  {
    id: 3,
    title: "CompTIA Project+",
    years: "2021 - 2021",
    content:
      "Covering a broad range of project management concepts, this helped me understand how to communicate better with the business while working a project.",
  },
  {
    id: 4,
    title: "IBM Data Science",
    years: "2020 - 2021",
    content:
      "I learned various skills and tools to use in Data Science projects.  I gained a strong understanding of the data science process and implement them as needed for to give team members or supervisors higher level visiblity into existing processes from data.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Full Stack Developer - Stockell Consulting",
    years: "2022 - Present",
    content:
      "I was put on an agile team to help expand an existing application.  Our application has several functions and brings data together for our business and our clients. I work with some very talented and movitated individuals.",
  },
  {
    id: 2,
    title: "Information Specialist - Aera Energy",
    years: "2013 - 2022",
    content:
      "Varied responsiblities.  Application Development, support, project management, project team member.  Mostly waterfall and agile. Lead change",
  },
  {
    id: 3,
    title: "Web Developer - U.S. Computers",
    years: "2011 - 2013",
    content: "Web developer.  Interfaced with ",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience &amp; Education" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
