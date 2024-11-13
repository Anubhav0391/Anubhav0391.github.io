import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 } // Adjust to trigger when 10% of the element is visible
    );

    const elements = document.querySelectorAll(
      ".slideUp, .project-card, .react, .redux, .html, .css, .tailwind, .mui, .github, .ts, .js"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Stack minHeight={"100vh"} >
      <Navbar />
      <Stack mt={9.6} >
        <Home />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </Stack>
    </Stack>
  );
}

export default App;


