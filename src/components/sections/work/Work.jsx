import Project from "./Project";
import classes from "./Work.module.scss";
import { Element } from "react-scroll";

const projects = [
  {
    id: 1,
    title: "TW Portfolio Design",
    description: "Elias's Portfolio Design",
    techStack: ["Figma", "UI/UX Design"],
    github: "",
    live: "",
    apiDocumentation: "",
    figma:
      "https://www.figma.com/file/VyIB8EalExjwYmtYzy4J0y/Untitled?type=design&node-id=0%3A1&t=JyGJsFMMw6tiBjVG-1",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "personal portfolio",
    techStack: ["ReactJS", "SASS"],
    github: "https://github.com/covaci-edvin/personal-portfolio-covaci-edvin",
    live: "https://personal-portfolio-covaci-edvin.vercel.app/",
    apiDocumentation: "",
    figma: "",
  },
  {
    id: 3,
    title: "Portfolio Design",
    description: "UI/UX for personal portfolio",
    techStack: ["Figma", "UI/UX Design"],
    github: "",
    live: "",
    apiDocumentation: "",
    figma:
      "https://www.figma.com/file/FXfn0hEOP03aAvHvqjgVXh/Untitled?node-id=0%3A1&t=IPLlmqkiKjACuenK-1",
  },
  {
    id: 4,
    title: "Group Go API",
    description: "API for the license project",
    techStack: ["NodeJS", "MongoDB"],
    github: "https://github.com/covaci-edvin/group-go-app-api",
    live: "",
    apiDocumentation:
      "https://documenter.getpostman.com/view/20249850/2s935vjK8s",
    figma: "",
  },
  {
    id: 5,
    title: "Group Go Design",
    description: "UI/UX Design for the license project",
    techStack: ["Figma", "UI/UX Design"],
    github: "",
    live: "",
    apiDocumentation: "",
    figma:
      "https://www.figma.com/file/Pf5Fl7Mj5plomkpvFQFiNP/Untitled?node-id=0%3A1&t=SKry51fxu2qARBEE-1",
  },
  {
    id: 6,
    title: "Group Go App",
    description: "License project built using RN",
    techStack: ["React Native", "Redux"],
    github: "https://github.com/covaci-edvin/Group-Go-App",
    live: "",
    apiDocumentation: "",
    figma: "",
  },
  {
    id: 7,
    title: "Uber Clone",
    description: "practice project",
    techStack: ["React Native", "TailwindCSS"],
    github: "https://github.com/covaci-edvin/uber-clone",
    live: "",
    apiDocumentation: "",
    figma: "",
  },
  {
    id: 8,
    title: "Natours",
    description: "practice project",
    techStack: ["HTML", "CSS", "SASS"],
    github: "https://github.com/covaci-edvin/natours-project",
    live: "https://natours-advaced-css-sass-practice.netlify.app/",
    apiDocumentation: "",
    figma: "",
  },
  {
    id: 9,
    title: "Trillo",
    description: "practice project",
    techStack: ["HTML", "CSS", "SASS"],
    github: "https://github.com/covaci-edvin/trillo-traveling-project",
    live: "https://trillo-traveling.netlify.app/",
    apiDocumentation: "",
    figma: "",
  },
];

const Work = () => {
  return (
    <Element name="work" className={classes.work}>
      <h2 className={classes.work__title}>Work</h2>
      <div className={classes.work__projects}>
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            type={project.type}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.github}
            liveLink={project.live}
            apiDocumentationLink={project.apiDocumentation}
            figmaLink={project.figma}
          />
        ))}
      </div>
    </Element>
  );
};

export default Work;
