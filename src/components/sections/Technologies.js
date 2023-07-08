import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import { Link } from "react-scroll";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: ".NET",
    content: "12.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "MSSQL",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Javascript",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F97B8B",
    contentColor: "light",
  },

  {
    id: 4,
    icon: "images/service-1.svg",
    title: "Cloud",
    content: "12.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 5,
    icon: "images/service-2.svg",
    title: "React",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 6,
    icon: "images/service-3.svg",
    title: "Python",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Technologies() {
  return (
    <section id="technologies">
      <div className="container">
        <Pagetitle
          title="Technologies"
          subtitle={
            "What makes me a stand out full stack developer is my understanding and expertise in a wide range of technologies"
          }
        />

        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          Over the years I've worked with many other technologies but these
          listed here have been in my duties for the greater part of my career.
          {/* <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
