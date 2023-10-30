import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import { Link } from "react-scroll";
import Service from "../elements/Service";
import Portfolio from "../elements/Portfolio";
import { ImBooks } from "react-icons/im";
import Quote from "../elements/Quote";

import problemSolvingImage from "../../images/content/problem-solving.png";
import communicationImage from "../../images/content/communication.png";
import adaptabilityImage from "../../images/content/adaptability.png";
import leadershipImage from "../../images/content/leadership.png";
import teamworkImage from "../../images/content/teamwork.png";
import workEthicImage from "../../images/content/workEthic.png";

// function Portfolio({ portfolio }) {
//     const { category, title, image, popupLink, link } = portfolio;
const projectsList = [
  {
    id: 2,
    image: communicationImage,
    title: "Sider",
    link: "https://siderapp.com",
    content:
      "In 2023, my brothers and I launched Sider.  A community-based digital marketplace for local side hustles and services.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 3,
    image: adaptabilityImage,
    title: "Sider Marketing",
    link: "https://web.siderapp.com/",
    content: "The marketing site for Sider",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 1,
    image: problemSolvingImage,
    title: "AI Experiment",
    link: "https://danmudge.streamlit.app/",
    content: "A school project I put together in python using streamlit",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 4,
    image: leadershipImage,
    title: "Oilwell dispatching",
    content:
      "An application I built in MVC for a local oil company to dispatch work and track employee time.",
    color: "#1e1e1e",
    contentColor: "light",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Pagetitle
          title="Other Projects"
          subtitle={
            "In my spare time I do consulting, application development, and website development"
          }
        />

        <div className="row fix-spacing">
          {projectsList.map((project) => (
            <div className="col-md-4" key={project.id}>
              <Portfolio portfolio={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
