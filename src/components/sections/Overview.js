import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import { Link } from "react-scroll";
import Service from "../elements/Service";
import { ImBooks } from "react-icons/im";
import Quote from "../elements/Quote";

import problemSolvingImage from "../../images/content/problem-solving.png";
import communicationImage from "../../images/content/communication.png";
import adaptabilityImage from "../../images/content/adaptability.png";
import leadershipImage from "../../images/content/leadership.png";
import teamworkImage from "../../images/content/teamwork.png";
import workEthicImage from "../../images/content/workEthic.png";

const overViewSkills = [
  {
    id: 2,
    icon: communicationImage,
    title: "Communication",
    content:
      "I diligently engage in active listening, welcome constructive criticism, and demonstrate proficiency in both oral and written communication.",
    // "I practice active listening, receiving contructive feedback, verbal communication, written communication",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 3,
    icon: adaptabilityImage,
    title: "Adaptability",
    content:
      "I am curious and have an insasiable drive to learn.  I throughly enjoy learning, mostly through experimentation and reading.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 1,
    icon: problemSolvingImage,
    title: "Problem Solver",
    content:
      "I am a very pragmatic problem solver.  Even with unknowns, I can help identify potenial root causes and solutions quickly.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 4,
    icon: leadershipImage,
    title: "Leadership",
    content:
      "I am dedicated to embodying an exemplary figure within our team.  I work for my peers to make sure we all can succeed.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 5,
    icon: teamworkImage,
    title: "Teamwork",
    content:
      "I harmonize my strategy with the teams our objectives, fostering positive outcomes and key relationships for goal attainment.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 6,
    icon: workEthicImage,
    title: "Work Ethic",
    content:
      // "I am deeply committed to excellence in my professional endeavors, persistently aspiring to deliver industry-leading outcomes.",
      "In every endeavor, I pledge to deliver my best, persistently aspiring to deliver industry-leading outcomes and optimal results.",
    color: "#1e1e1e",
    contentColor: "light",
  },
];

function Overview() {
  return (
    <section id="overview">
      <div className="container">
        <Pagetitle title="Overview" subtitle={<Quote />} />

        <div className="row fix-spacing">
          {overViewSkills.map((highLevelSkill) => (
            <div className="col-md-4" key={highLevelSkill.id}>
              <Service service={highLevelSkill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
