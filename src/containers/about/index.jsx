import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './style.scss';
import { RiJavascriptFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import {  FaReact,  FaCss3Alt } from "react-icons/fa";
const personalDetails = [
    {
        label: "Name",
        value: "Divyani Lilariya",
    },
    {
        label: "Address",
        value: "Hyderabad Ameerpet",
    },
    {
        label: "Email",
        value: "lilariyadivyani@gmail.com",
    },
    {
        label: "Contact No",
        value: "6264152306",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/divyani-lilariya-a9b317240",
  },
];

const jobSummary =
    "1.6 Years Experienced React Developer With Hands-on experience in identifying web-based user interaction along with designing & implementing highly Responsive user interface Components, by Developing React Concepts. Proficient in translating design and Wireframs in high-Quality Code via Javascript and ReactJS Workflows"

const About = () => {
    return (
        <section id='about' className='about'>
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='about__content'>
            <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about__content__servicesWrapper'>
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <TiHtml5 size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaCss3Alt size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <RiJavascriptFill size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
            </div>
        </section>
    )
}

export default About
