import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import './style.scss';

const skillsData = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "90",
      },
      {
        skillName: "CSS",
        percentage: "50",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "80",
      },
      {
        skillName: "TYPESCRIPT",
        percentage: "80",
      },
      {
        skillName: "REACT",
        percentage: "80",
      },
    ],
  },
  {
    label: "FRAMEWORK",
    data: [
      {
        skillName: "REDUX",
        percentage: "60",
      },
      {
        skillName: "REACT",
        percentage: "80",
      },
      {
        skillName: "NEXT JS",
        percentage: "70",
      },
      {
        skillName: "BOOTSTRAP",
        percentage: "70",
      },
      {
        skillName: "MATERIAL UI",
        percentage: "70",
      },
    ],
  },
  
  {
    label: "DATABASES",
    data: [
      {
        skillName: "SQL",
        percentage: "70",
      },
      {
        skillName: "MONGO DB",
        percentage: "65",
      },
     
    ],
  },
];
const Skill = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="4"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="4"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skill;