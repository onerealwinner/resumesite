import React from "react";
import Pagetitle from "../elements/Pagetitle";
import { Link } from "react-scroll";

import Service from "../elements/Service";

const skillData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Communication",
    content: "12.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "SQL Server",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "IIS",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F97B8B",
    contentColor: "light",
  },

  {
    id: 4,
    icon: "images/service-1.svg",
    title: "Azure",
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
    title: "Javascript",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function SoftSkills() {
  return (
    <section id="softSkills">
      <div className="container">
        <Pagetitle title="Soft Skills" />

        <div className="row fix-spacing">
          {skillData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
