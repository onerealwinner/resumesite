import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { FaBeer } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiTwotoneStar, AiFillStar } from "react-icons/ai";
import {
  GiBarbedStar,
  GiBeveledStar,
  GiDeathStar,
  GiFlexibleStar,
  GiFlowerStar,
  GiStarFormation,
  Gi3DGlasses,
  GiStarKey,
  GiNorthStarShuriken,
  GiPolarStar,
  GiStarfighter,
  GiTriforce,
  GiBrainDump,
} from "react-icons/gi";

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          {/*  TODO: <img src="images/avatar-1.svg" alt="name" className="mb-4" /> */}

          <h1 className="mb-2 mt-0">Daniel Mudge</h1>
          <p>
            I am{" "}
            <Typed
              strings={[
                "a ",
                "a top tier problem solver ",
                "a top tier full stack developer ",
                "a top tier critical thinker ",
                "a software architech",
                "a SQL wizard",
                "a data whisperer :)",
                "a trailblazer",
                "a team player",
                "a mentor",
                "a data scientist",
                "a lean implementor",
                "always learning",
                "One Real Winner",
              ]}
              typeSpeed={80}
              backSpeed={120}
              backDelay={3}
              attr="value"
              loop
              smartBackspace
            >
              <label value></label>
            </Typed>
          </p>

          {/* TODO: 
          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul> */}

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>

        <div className="parallax" data-relative-input="true">
          <GiPolarStar
            width="30"
            height="30"
            className="layer p1"
            style={activeParallax(15)}
            size={50}
            fill="#FFFFFF"
          />
          <BsFillMoonStarsFill
            width="26"
            height="26"
            className="layer p2"
            style={activeParallax(20)}
            fill="#FFFFFF"
            size={40}
          />
          <GiBeveledStar
            width="30"
            height="25"
            className="layer p3"
            fill="#f0f0f0"
            style={activeParallax(25)}
            size={35}
          />
          <AiTwotoneStar
            width="15"
            height="23"
            className="layer p4"
            fill="#888"
            size={25}
            style={activeParallax(10)}
          />
          <GiBarbedStar
            width="15"
            height="23"
            className="layer p5"
            fill="#efefef"
            size={35}
            style={activeParallax(8)}
          />
          <AiFillStar
            width="49"
            height="17"
            className="layer p6"
            fill="#f8f8f8"
            size={35}
            style={activeParallax(18)}
          />
          <GiDeathStar
            width="26"
            height="26"
            className="layer p7"
            fill="#b8b8b8"
            size={70}
            style={activeParallax(22)}
          />
          <GiFlexibleStar
            width="19"
            height="21"
            className="layer p8"
            fill="#FFFFFF"
            size={50}
            style={activeParallax(15)}
          />
          <GiFlowerStar
            width="30"
            height="25"
            className="layer p9"
            fill="#e0e0e0"
            size={40}
            style={activeParallax(10)}
          />
          <GiStarfighter
            width="47"
            height="29"
            className="layer p10"
            fill="#f1f1f1"
            size={70}
            style={activeParallax(9)}
          />
          <GiNorthStarShuriken
            width="33"
            height="20"
            className="layer p11"
            fill="#f8f8f8"
            size={40}
            style={activeParallax(18)}
          />
          <GiTriforce
            width="30"
            height="30"
            className="layer p12"
            size={30}
            fill="#f8f800"
            style={activeParallax(22)}
          />

          {/* <GiPolarStar
            id="svgelem"
            width="30"
            height="30"
            className="layer p12"
            style={activeParallax(32)}
          />
          <GiStarfighter
            width="30"
            height="30"
            className="layer p13"
            style={activeParallax(10)}
          />
           */}
        </div>
      </div>
    </section>
  );
}

export default Herosection;
