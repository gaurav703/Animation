import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Animation from "./component/Animation/Animation";

function App() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   var tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#main",
  //       markers: true,
  //       start: "75% 50%",
  //       end: "100% 50%",
  //       scrub: 5,
  //       duration: 1,
  //       pin: true,
  //     },
  //   });
  //   tl.to(".img", {
  //     width: "100vw",
  //     height: "100vh",
  //   });
  // }, []);

  // Animation to increase width and height of the image after ScrollTrigger animation

  return (
    // <div id="main">
    //   <div class="nav">
    //     <a href="/">( MENU )</a>
    //     <a id="our" href="/">
    //       Our Revolution
    //     </a>
    //     <a href="/">( WORK* )</a>
    //   </div>
    //   <div class="content">
    //     <div class="dots-div">
    //       <div class="dot"></div>
    //       <div class="dot"></div>
    //       <div class="dot"></div>
    //     </div>
    //     <h1>
    //       Till now, energy drinks have been like <br />
    //       a bad cologne, overwhelming and <br />
    //       hard to get away from. Time for a <br />
    //       change. Time to remove bad energy.
    //     </h1>
    //     <div class="dots-div">
    //       <div class="dot"></div>
    //       <div class="dot"></div>
    //       <div class="dot"></div>
    //     </div>
    //   </div>
    //   <div class="img-div">
    //     <div class="img"></div>
    //   </div>
    // </div>
    <div className="App">
      <Animation />
    </div>
  );
}

export default App;
