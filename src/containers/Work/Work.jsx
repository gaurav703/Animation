/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { useTheme } from "../../hooks/useTheme";
const Work = () => {
  const [activeFilter, setActiveFilter] = useState(" ");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const projects = [
    {
      title: "Emergency SOS Android App",
      description:
        "An Android app for emergency health assistance with patient history updates, SOS alerts with location, and medical reminders.",
      imgUrl: "path/to/emergency-sos-app-image.png",
      projectLink: "https://link-to-emergency-sos-app",
      codeLink: "https://github.com/username/emergency-sos-app",
      tags: ["Android", "Java", "Health"],
    },
    {
      title: "Krishimitra Android App",
      description:
        "An Android app for farmers offering daily weather updates, APMC prices, and an e-commerce marketplace for selling and buying products.",
      imgUrl: "path/to/krishimitra-app-image.png",
      projectLink: "https://link-to-krishimitra-app",
      codeLink: "https://github.com/username/krishimitra-app",
      tags: ["Android", "Java", "Agriculture"],
    },
    {
      title: "CryptoPriceX Android App",
      description:
        "An Android app providing real-time cryptocurrency price tracking, live updates, and detailed analysis for various cryptocurrencies.",
      imgUrl: "path/to/cryptopricex-app-image.png",
      projectLink: "https://link-to-cryptopricex-app",
      codeLink: "https://github.com/username/cryptopricex-app",
      tags: ["Android", "Java", "Cryptocurrency"],
    },
    {
      title: "Custom Phone Case Covers and Laptop Skins Website",
      description:
        "A website for designing and ordering custom phone case covers and laptop skins with an interactive interface.",
      imgUrl: "path/to/designmycase-website-image.png",
      projectLink: "https://link-to-designmycase-website",
      codeLink: "https://github.com/username/designmycase",
      tags: ["Next.js", "Tailwind CSS", "E-commerce"],
    },
    {
      title: "Real-time Sign Language Detection",
      description:
        "A computer vision project using OpenCV to detect and translate sign language gestures into text in real-time.",
      imgUrl: "path/to/sign-language-detection-image.png",
      projectLink: "https://link-to-sign-language-detection",
      codeLink: "https://github.com/username/sign-language-detection",
      tags: ["Python", "OpenCV", "AI"],
    },
  ];

  // const handleWorkFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);
  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);
  //     if (item === "All") {
  //       setFilterWork(works);
  //     } else {
  //       setFilterWork(works.filter((work) => work.tags.includes(item)));
  //     }
  //   }, 500);
  // };
  // useEffect(() => {
  //   const query = '*[_type== "works"]';
  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);
  const { mode } = useTheme();
  return (
    <>
      <h2 className={`head-text ${mode}`}>Projects</h2>
      <div className="app__work-filter">
        {["Mobile App", "Web App", "All"].map((item, index) => (
          <div
            key={index}
            // onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app_cont">
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {projects.map((work, index) => (
            <div className={`app__work-item ${mode} app_flex`} key={index}>
              <div className="app__work-img app__flex">
                <img
                  src="/28f51999e3ca59e6534c1e58bad2cf963a3ce854-860x657.png"
                  alt="/project-image"
                />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [1, 0.9] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className=" app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [1, 0.9] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className=" app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className={`bold-text ${mode}`}>{work.title}</h4>
                <p className={`p-text ${mode}`} style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="mobile-links">
                  <div>
                    <a href={work.projectLink}>Visit App</a>
                  </div>
                  <div>
                    <a href={work.codeLink}>Source code</a>
                  </div>
                </div>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
