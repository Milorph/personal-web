import React from "react";
import { Element } from "react-scroll";
import Landing from "./components/Landing";
import About from "./components/About";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";

function App() {
  return (
    <div>
      <Box
        sx={{
          background: `linear-gradient(to bottom,
        #1a2a6c 0%,         /* Landing start */
        #b21f1f 20%,
        #fdbb2d 30%,
        #2b1055 40%,        /* About */
        #7597de 50%,
        #5f0a87 60%,
        #ff6a00 70%,        /* Experience */
        #ee0979 75%,
        #a4508b 80%,
        #0f172a 85%,        /* Tools */
        #1e40af 90%,
        #14b8a6 95%,
        #1a2a6c 100%        /* Contact */
      )`,
          minHeight: "100vh",
        }}
      >
        <Element name="landing">
          <Landing />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="tools">
          <Tools />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Box>
      <Navbar />
    </div>
  );
}

export default App;
