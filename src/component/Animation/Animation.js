import React from "react";
import "./Animation.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
export default function Animation() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        markers: true,
        start: "75% 50%",
        end: "100% 50%",
        scrub: 1,
        duration: 2,
        pin: true,
      },
    });
    tl.to(".img", {
      width: "100vw",
      height: "100vh",
    });
  }, []);

  return (
    <div className="main">
      <div className="nav">
        <a href="/">( MENU )</a>
        <a id="our" href="/">
          Our Revolution
        </a>
        <a href="/">( WORK* )</a>
      </div>
      <div className="content">
        <div className="dots-div">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <h1>
          Till now, energy drinks have been like <br />
          a bad cologne, overwhelming and <br />
          hard to get away from. Time for a <br />
          change. Time to remove bad energy.
        </h1>
        <div className="dots-div">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="img-div">
        <div className="img"></div>
      </div>
    </div>
  );
}
