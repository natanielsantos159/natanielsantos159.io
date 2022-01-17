import React from "react";
import githubIcon from "../images/github.png";
import websiteIcon from "../images/laptop.png";
import "../styles/Project.css";

export default function ProjectCard({
  image,
  name,
  description,
  repository,
  website,
  tags,
}) {
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img
          src={image}
          alt={`Imagem do Projeto ${name}`}
          className="project-image"
        />
      </div>
      <h2 className="project-name">{name}</h2>
      <div className="tags-wrapper">
        {tags.map((tag, i) => (
          <div className="tag" key={i}>
            {tag}
          </div>
        ))}
      </div>
      <div className="description-wrapper">
        <p className="project-description">{description}</p>
      </div>
      <section className="btn-wrapper">
        <a
          href={repository}
          className="btn-repository"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
          GitHub
        </a>
        <a
          href={website}
          className="btn-website"
          target="_blank"
          rel="noreferrer"
        >
          <img src={websiteIcon} alt="Website" />
          Website
        </a>
      </section>
    </div>
  );
}
