import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";

import homeIcon from "../images/home.png";
import homeHover from "../images/home-hover.png";
import projectsIcon from '../images/projects.png';
import projectsHover from '../images/projects-hover.png';
import aboutIcon from '../images/about.png';
import aboutHover from '../images/about-hover.png';
import contactIcon from '../images/contact.png';
import contactHover from '../images/contact-hover.png';

import "../styles/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () =>
      setScrolled(window.scrollY > 200)
      );
    }
  }, []);

  return (
    <header className={scrolled && 'header-scrolled'}>
      <h1>Nataniel Santos</h1>
      <nav className="header-navs">
        <HeaderNav
          name="home"
          link="/"
          img={homeIcon}
          imgHover={homeHover}
        >
          Início
        </HeaderNav>
        <HeaderNav
          name="projects"
          link="projects-container"
          img={projectsIcon}
          imgHover={projectsHover}
        >
          Projetos
        </HeaderNav>
        <HeaderNav
          name="about"
          link="/about"
          img={aboutIcon}
          imgHover={aboutHover}
        >
          Sobre
        </HeaderNav>
        <HeaderNav
          name="contact"
          link="contact-container"
          img={contactIcon}
          imgHover={contactHover}
        >
          Contato
        </HeaderNav>
      </nav>
    </header>
  );
}
