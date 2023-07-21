import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import GolfCourseImg from "../../images/content/golfCourse3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faStar,
  faCoffee,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const fireIcon = <FontAwesomeIcon icon={faFire} size="3x" beat />;
const coffeeIcon = <FontAwesomeIcon icon={faCoffee} size="3x" shake />;
const peopleIcon = <FontAwesomeIcon icon={faProjectDiagram} size="3x" bounce />;
const badgeIcon = <FontAwesomeIcon icon={faStar} size="3x" spin spinReverse />;

const aboutContent = {
  name: "Daniel Mudge",
  avatarImage: "/images/avatar-2.svg",
  content: "Golf",
};

const progressData = [
  {
    id: 1,
    title: "Development",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "UI/UX Design",
    percantage: 95,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Photography",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Problems Solved",
    count: 4416,
    icon: fireIcon,
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 4416 * 3,
    icon: coffeeIcon,
  },
  {
    id: 3,
    title: "Projects completed",
    count: 627,
    icon: peopleIcon,
  },
  {
    id: 4,
    title: "Gold stars",
    count: 3319,
    icon: badgeIcon,
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3 flex-center-content-container">
            <div className="text-center text-md-left text-center media wow zoomIn">
              <img
                src={GolfCourseImg}
                alt="AI Generated Golf Course - Daniel Mudge loves AI Golf"
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    I am passionately committed to crafting trailblazing
                    solutions for the most complex of challenges. My insatiable
                    curiosity kindles an environment of non-conventional
                    thinking and constant innovation. I derive genuine joy from
                    building bridges within teams, closing operational gaps, and
                    discovering hidden potentials. My deep-seated love for
                    learning, paired with my nimbleness in absorbing and
                    adapting to new concepts and technologies, ensures that I
                    stay on the cutting edge of our industry's dynamic
                    evolution. All AI content
                  </p>
                  <p>
                    My unwavering work ethic, concentrated on achieving the
                    day's objectives, is powered by a rich sense of fulfillment.
                    This is intimately linked to creating technology-driven
                    solutions, spanning from all-encompassing implementations
                    and integrations to offering unrivaled support and training.
                    In every endeavor, I pledge to deliver my best, steering our
                    course towards optimal results.
                  </p>
                  {/* <p>
                    Among my team, the prevalent sentiment is one of profound
                    appreciation for my contributions. My positivity and unique
                    sense of humor infuse our workspace with a lively and
                    engaging atmosphere. Embracing tasks others may find
                    intimidating, I demonstrate open-mindedness and superior
                    communication skills, fostering a spirit of daring and
                    determination.
                  </p> */}
                  <p>
                    As a reliable ally for colleagues grappling with challenges,
                    my attentive listening and insightful troubleshooting ensure
                    we navigate towards successful outcomes. This potent blend
                    of empathetic leadership traits makes me an inspiring force
                    within our organization, cultivating an environment where
                    everyone feels valued, empowered, and driven towards our
                    shared mission.
                  </p>
                  {/* <p>
                    I love developing innovative solutions for challenging
                    problems. I am generally curious about everything and thrive
                    in environments where I can think outside of the box. I
                    enjoy working with people, bridging gaps, and working across
                    whitespace. I love learning and am a quick learner. My
                    learning style is complimented by my curiosity. Picking up
                    new concepts and technologies comes easy to me. I enjoy
                    working hard, I get the most out of my day when I feel like
                    I’ve accomplished what I set out to do. These attributes of
                    mine deeply align with creating solutions with technology.
                    Whether it’s an end-to-end implementation, integration,
                    support, or training I strive to present my best self and
                    promote the best outcome.
                  </p>

                  <p>
                    The most common feedback I receive from peers is that they
                    are grateful I am on their team. People say they enjoy
                    working with me because of my attitude (I don't let much get
                    to me) and humor (I am generally hilarious). In team
                    environments, I tend to pick up tasks that others shy any
                    from. I am open-minded, and a great communicator. When any
                    colleague is facing an issue, I am one of the go-to guys to
                    call. By listening and providing some insights a great
                    outcome is inevitable.
                  </p> */}

                  {/* <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Download CV
                    </a>
                  </div> */}
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                {/* <div className="col-md-6">
                  {/* {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}               
                   </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
