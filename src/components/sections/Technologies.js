import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import { Link } from "react-scroll";
import Service from "../elements/Service";

import netImage from "../../images/content/net.png";
import mssqlImage from "../../images/content/microsoft-sql-server-logo-256.png";
import pythonImage from "../../images/content/python-logo-256.png";
import reactImage from "../../images/content/react-logo-256.png";
import cloudImage from "../../images/content/microsoft-azure-logo-256.png";
import javascriptImage from "../../images/content/html-css-js-256.png";

const servicesData = [
  {
    id: 1,
    icon: netImage,
    title: ".NET",
    content: "",
    color: "#fff",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: mssqlImage,
    title: "MSSQL",
    content: "",
    color: "#fff",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: javascriptImage,
    title: "HTML, CSS, JS",
    content: "",
    color: "#fff",
    contentColor: "dark",
  },

  {
    id: 4,
    icon: cloudImage,
    title: "Cloud",
    content: "",
    color: "#fff",
    contentColor: "dark",
  },
  {
    id: 5,
    icon: reactImage,
    title: "React",
    content: "",
    color: "#fff",
    contentColor: "dark",
  },
  {
    id: 6,
    icon: pythonImage,
    title: "Python",
    content: "",
    color: "#fff",
    contentColor: "dark",
  },
];

function Technologies() {
  return (
    <section id="technologies">
      <div className="container">
        <Pagetitle
          title="Technologies"
          subtitle={
            "What makes me a stand out full stack developer is my expertise in a wide range of technologies and enhanced ability to pick and learn new technologies at lightspeed."
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
          {/* Over my career I've worked with many other technologies, I highlighted
          these as I find the most enjoyment out of this stack. */}
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
