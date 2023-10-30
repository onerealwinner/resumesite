import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import Brandlogos from "../components/sections/Brandlogos";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Pricing from "../components/sections/Pricing";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Works from "../components/sections/Works";
import Technologies from "../components/sections/Technologies";
import Overview from "../components/sections/Overview";
import Operations from "../components/sections/Operations";

import sectionBg from "../images/content/section-bg.jpg";
import { Parallax, Background } from "react-parallax";
import Projects from "../components/sections/Projects";

function Home() {
  return (
    <>
      <Header3 logoSource="/images/logo.svg" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-overview">
          <Overview />
        </Element>
        <Element name="section-about">
          <About />
        </Element>

        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImage={sectionBg}
          bgImageAlt="starry night"
          strength={600}
          bgImageStyle={{ opacity: ".90" }}
        >
          <Element name="section-technologies">
            <Technologies />
          </Element>
        </Parallax>

        <Element name="section-experiences">
          <Experiences />
        </Element>

        <Element name="section-projects">
          <Projects />
        </Element>

        {/* <Element name="section-pricing">
          <Pricing />
        </Element> */}
        {/* <Element name="section-testimoninal">
          <Testimonials />
        </Element> */}
        {/* <Element name="section-brandlogos">
          <Brandlogos />
        </Element> */}
        {/* <Element name="section-blogs">
          <Blogs />
        </Element> */}
        {/* <Element name="section-contact">
          <Contact />
        </Element> */}
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
