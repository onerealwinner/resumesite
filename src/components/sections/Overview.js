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
    id: 1,
    icon: problemSolvingImage,
    title: "Problem Solver",
    content:
      "I am a very pragmatic problem solver.  Even with unknowns, I can help identify potenial root causes and solutions quickly.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 2,
    icon: communicationImage,
    title: "Communication",
    content:
      "I practice active listening, receiving contructive feedback, verbal communication, written communication",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 3,
    icon: adaptabilityImage,
    title: "Adaptability",
    content:
      "I am curious and have an insasiable drive to learn.  I throughly enjoy learning, mostly through experimentation, tutorials and reading.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 4,
    icon: leadershipImage,
    title: "Leadership",
    content:
      "I strive to be a peer that can be looked up upon as an outstanding teammate.  I work for my peers to make sure we all can succeed.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 5,
    icon: teamworkImage,
    title: "Teamwork",
    content:
      "I keep my vision aligned with the goal, focus on the positive and connect with the right people to accomplish a lot.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 6,
    icon: workEthicImage,
    title: "Work Ethic",
    content:
      "Responsibility and dependability are stand out characteritics.  I strive to maintain professionalism  ",
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
