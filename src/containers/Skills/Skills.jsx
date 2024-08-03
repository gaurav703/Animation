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
          desc: "Worked on full-stack development projects including frontend and backend technologies like Next.js, React Native, Tailwind CSS, Node.js, Express.js, and MongoDB. Contributed to more than 5 projects and led the software team for 2 major projects.",
        },
        // {
        //   name: "Mentor",
        //   company: "GirlScript Summer of Code",
        //   desc: "Mentored students in open source contributions, helping them with project issues and guiding them through coding practices and best solutions.",
        // },
      ],
    },
    {
      year: "AUG-2022 - PRESENT",
      works: [
        {
          name: "Core Member",
          company: "RNXG",
          desc: "Led and mentored more than 2 projects, guiding team members and ensuring timely delivery of software solutions.",
        },
      ],
    },
  ];
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type== "experiences"]';
    const skillsQuery = '*[_type== "skills"]';
    // client.fetch(query).then((data) => {
    //   setExperiences(data);
    // });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  const { mode } = useTheme();
  return (
    <>
      <h2 className={`head-text ${mode}`}>Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`app__skills-item ${mode} app__flex`}
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
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
