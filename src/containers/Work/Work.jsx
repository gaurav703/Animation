/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { useTheme } from "../../hooks/useTheme";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const projects = [
    {
      title: "CryptoPriceX Android App",
      description:
        "An Android app providing real-time cryptocurrency price tracking, live updates, and detailed analysis for various cryptocurrencies.",
      imgUrl: "/cryptopricex.jpg",
      projectLink: "https://github.com/gaurav703/CryptoPriceX",
      codeLink: "https://github.com/gaurav703/CryptoPriceX",
      tags: ["Mobile App", "Android", "Java", "Cryptocurrency"],
    },
    {
      title: "Xero App",
      description:
        "An Android app for emergency health assistance with patient history updates, SOS alerts with location, and medical reminders.",
      imgUrl: "/portfolio.png",
      projectLink: "https://github.com/gaurav703/Krishimitra",
      codeLink: "https://github.com/gaurav703/Krishimitra",
      tags: ["Mobile App", "Android", "Java", "Health"],
    },
    {
      title: "Krishimitra Android App",
      description:
        "An Android app for farmers offering daily weather updates, APMC prices, and an e-commerce marketplace for selling and buying products.",
      imgUrl: "/portfolio.png",
      projectLink: "https://link-to-krishimitra-app",
      codeLink: "https://github.com/username/krishimitra-app",
      tags: ["Mobile App", "Android", "Java", "Agriculture"],
    },

    // {
    //   title: "Custom Phone Case Covers and Laptop Skins Website",
    //   description:
    //     "A website for designing and ordering custom phone case covers and laptop skins with an interactive interface.",
    //   imgUrl: "/portfolio.png",
    //   projectLink: "https://link-to-designmycase-website",
    //   codeLink: "https://github.com/username/designmycase",
    //   tags: ["Web App", "Next.js", "Tailwind CSS", "E-commerce"],
    // },
    {
      title: "Real-time Sign Language Detection",
      description:
        "A computer vision project using OpenCV to detect and translate sign language gestures into text in real-time.",
      imgUrl: "/portfolio.png",
      projectLink: "https://link-to-sign-language-detection",
      codeLink: "https://github.com/username/sign-language-detection",
      tags: ["AI", "Python", "OpenCV", "AI"],
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing various projects and skills, built with React, SCSS, and JavaScript.",
      imgUrl: "/portfolio.png",
      projectLink: "https://my-portfolio-six-dusky-27.vercel.app/",
      codeLink: "https://github.com/gaurav703/my-portfolio",
      tags: ["Web App", "React", "SCSS", "JavaScript"],
    },
    {
      title: "DevEvents",
      description:
        "A web application for finding and managing developer events, built with Next.js and Tailwind CSS.",
      imgUrl: "/devents.png",
      projectLink: "https://devmeets-gold.vercel.app/",
      codeLink: "https://github.com/gaurav703/DevEvents",
      tags: ["Web App", "Next.js", "Tailwind CSS", "Events"],
    },
  ];

  const { mode } = useTheme();

  useEffect(() => {
    handleWorkFilter(activeFilter);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(projects);
      } else {
        setFilterWork(projects.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className={`head-text ${mode}`}>Projects</h2>
      <div className="app__work-filter">
        {["Mobile App", "Web App", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
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
          {filterWork.map((work, index) => (
            <div className={`app__work-item ${mode} app_flex`} key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt="/project-image" />
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
