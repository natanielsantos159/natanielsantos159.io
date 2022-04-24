import React from "react";
import AboutMe from "../containers/AboutMe";
import ContactMe from "../containers/ContactMe";
import ProjectsContainer from "../containers/ProjectsContainer";
import ProjectSkills from "./ProjectSkills";
import { Element } from "react-scroll";
import "../styles/Home.css";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <main className="homepage">
      <ScrollToTop />
      <AboutMe />
      <Element name="projects-container">
        <ProjectsContainer />
      </Element>
      <Element name="contact-container">
        <ContactMe />
      </Element>
      <ProjectSkills />
    </main>
  );
}
