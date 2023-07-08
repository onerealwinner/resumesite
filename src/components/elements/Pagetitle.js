import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Pagetitle({ title, subtitle }) {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeInOut"
        animateOnce={true}
      >
        <h2 className="section-title">{title}</h2>
        {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
      </ScrollAnimation>
      <div className="spacer" data-height="60"></div>
    </>
  );
}

export default Pagetitle;
