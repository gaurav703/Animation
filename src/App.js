import React from "react";
import { Navbar } from "./components";
import {
  About,
  Footer,
  Header,
  Skills,
  Work,
} from "./containers";
import "./App.scss";

const App = () => {
  return (
    <div className={`app`}>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
