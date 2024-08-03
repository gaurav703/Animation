import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { useTheme } from "../../hooks/useTheme";
const About = () => {
  const { mode } = useTheme();
  const abouts = [
    {
      title: "Web Development",
      description: "I am a web developer",
    },
    {
      title: "Frontend Development",
      description: "I am a Frontend developer",
    },
    {
      title: "Backend  Development",
      description: "I am abackend developer",
    },
    {
      title: "MERN Stack",
      description: "I am a MERN Stack",
    },
  ];

  return (
    <>
      <h2 className={`head-text ${mode}`}>
        I Know that <span>Good Development</span> <br /> means{" "}
        <span>Good Business</span>{" "}
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={`app__profile-item `}
            key={index}
          >
            <img src="/about-img.png" alt="about" />
            <h2 className={`bold-text ${mode}`} style={{ marginTop: "20px" }}>
              MERN Stack developer
            </h2>
            <p className={`p-text ${mode}`} style={{ marginTop: "10px" }}>
              I am a MERN Stack developer with the passion of creating beautiful
              and functional web apps
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
