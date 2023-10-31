import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import { Link } from "react-scroll";
import Service from "../elements/Service";
import Portfolio from "../elements/Portfolio";
import Quote from "../elements/Quote";

import AISiteImage from "../../images/content/AISite.jpg";
import SiderImage from "../../images/content/Sider.jpg";
import SiderMarketingImage from "../../images/content/SiderMarketing.jpg";
import OilWellImage from "../../images/content/oil-well-solid.svg";

// function Portfolio({ portfolio }) {
//     const { category, title, image, popupLink, link } = portfolio;
const projectsList = [
  {
    id: 2,
    image: SiderImage,
    title: "Sider",
    link: "https://siderapp.com",
    content: "In 2023, my brothers and I launched Sider.",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 3,
    image: SiderMarketingImage,
    title: "Sider Marketing",
    link: "https://web.siderapp.com/",
    content: "The marketing site for Sider",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 1,
    image: AISiteImage,
    title: "AI Experiment",
    link: "https://danmudge.streamlit.app/",
    content: "A school project I put together in python using streamlit",
    color: "#1e1e1e",
    contentColor: "light",
  },
  {
    id: 4,
    image: OilWellImage,
    title: "Oilwell dispatching",
    content:
      "An MVC app for a local oil company to dispatch work and track employee time.",
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
