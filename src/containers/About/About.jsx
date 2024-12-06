import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useTheme } from "../../hooks/useTheme";

const About = () => {
  const { mode } = useTheme();
  const abouts = [
    {
      title: "Frontend Development",
      description:
        "I am a frontend developer specializing in creating intuitive and responsive user interfaces.",
      imgURl: "/front.png",
    },
    {
      title: "Mobile App Development",
      description:
        "I am a mobile app developer proficient in building seamless and user-friendly mobile applications.",
      imgURl: "/appdev.jpg",
    },
    {
      title: "Backend Development",
      description:
        "I am a backend developer experienced in designing robust and scalable server-side applications.",
      imgURl: "/backend.png",
    },
    {
      title: "MERN Stack Development",
      description:
        "I am a MERN Stack developer with a passion for creating beautiful and functional web apps using MongoDB, Express.js, React, and Node.js.",
      imgURl: "/about-img.png",
    },
  ];

  return (
    <>
      <h2 className={`head-text ${mode}`}>
        <span>Expertise in Development</span> <br />
        <span>Transforming Ideas</span> into <span>Innovative Solutions</span>
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
            <img src={about.imgURl} alt={about.title} />
            <h2 className={`bold-text ${mode}`} style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className={`p-text ${mode}`} style={{ marginTop: "10px" }}>
              {about.description}
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
