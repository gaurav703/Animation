import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import ReactTooltip from "react-tooltip";
import "./Skills.scss";
import { useTheme } from "../../hooks/useTheme";

const Skills = () => {
  const experiences = [
    {
      year: "MAY-2023 - PRESENT",
      works: [
        {
          name: "Software Engineer Intern",
          company: "Aeons Technologies",
          desc: "Worked on full-stack development projects, utilizing frontend technologies like Next.js, React Native, and Tailwind CSS, alongside backend technologies including Node.js, Express.js, and MongoDB. Contributed to over 5 diverse projects ranging from web applications to mobile apps, ensuring high performance and user experience. Took a leadership role in 2 major projects, managing the software team, coordinating tasks, and overseeing development to meet project milestones and deliverables. Engaged in code reviews, debugging, and implementing best practices for code quality and efficiency.",
        },
        // {
        //   name: "Mentor",
        //   company: "GirlScript Summer of Code",
        //   desc: "Mentored students in open source contributions, guiding them through project setup, development, and troubleshooting. Provided support on coding practices, best solutions, and project management. Assisted in reviewing pull requests, offering feedback on code quality, and helping students overcome technical challenges. Contributed to the growth of the open source community by sharing knowledge and encouraging best practices in software development.",
        // },
      ],
    },
    {
      year: "AUG-2022 - PRESENT",
      works: [
        {
          name: "Core Member",
          company: "RNXG",
          desc: "Led and mentored over 2 projects, including project planning, resource allocation, and delivery management. Provided guidance to team members, helping them navigate technical challenges and ensuring alignment with project goals. Facilitated effective communication within the team and between stakeholders, contributing to the successful execution of software solutions. Oversaw the implementation of best practices in software development and project management, leading to improved team productivity and project outcomes.",
        },
      ],
    },
  ];

  const [skills, setSkills] = useState([
    {
      name: "HTML",
      bgColor: "#f16529",
      imgUrl: "/html.png",
    },
    {
      name: "CSS",
      bgColor: "#2965f1",
      imgUrl: "/css.svg",
    },
    {
      name: "JavaScript",
      bgColor: "#f0db4f",
      imgUrl: "/javascript.png",
    },
    {
      name: "React.js",
      bgColor: "#61dbfb",
      imgUrl: "/Reactjs.png",
    },
    {
      name: "Node.js",
      bgColor: "#68a063",
      imgUrl: "/nodejs.png",
    },
    {
      name: "Express.js",
      bgColor: "#000",
      imgUrl: "/express.jpg",
    },
    {
      name: "MongoDB",
      bgColor: "#4db33d",
      imgUrl: "/mongo.png",
    },
    {
      name: "Git",
      bgColor: "#f34f29",
      imgUrl: "/git.png",
    },
    {
      name: "Tailwind CSS",
      bgColor: "#06b6d4",
      imgUrl: "/tailwind.png",
    },
    {
      name: "Next.js",
      bgColor: "#000",
      imgUrl: "/nextjs.png",
    },
    {
      name: "React Native",
      bgColor: "#61dbfb",
      imgUrl: "/Reactjs.png",
    },
    // {
    //   name: "Figma",
    //   bgColor: "#f24e1e",
    //   imgUrl: "/Reactjs.png",
    // },
  ]);
  const { mode } = useTheme();
  return (
    <>
      <h2 className={`head-text ${mode}`}>Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`app__skills-item ${mode} app__flex`}
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: "rgb(237, 242, 248)" }}
              >
                <img src={skill.imgUrl} alt="git " />
              </div>
              <p className={`p-text ${mode}`}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className={`bold-text ${mode}`}>{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className={`bold-text ${mode}`}>{work.name}</h4>
                      <p className={`p-text ${mode}`}>{work.company}</p>
                      <p className={`p-text ${mode}`}> {work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
