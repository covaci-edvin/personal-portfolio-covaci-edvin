import Project from "./Project";
import classes from "./Work.module.scss";
import { Element } from "react-scroll";

const projects = [
  {
    id: 1,
    title: "Natours",
    description: "practice project",
    techStack: ["HTML", "CSS", "SASS"],
    github: "https://github.com/covaci-edvin/natours-project",
    live: "https://natours-advaced-css-sass-practice.netlify.app/",
    apiDocumentation: "",
  },
  {
    id: 2,
    title: "Trillo",
    description: "practice project",
    techStack: ["HTML", "CSS", "SASS"],
    github: "https://github.com/covaci-edvin/trillo-traveling-project",
    live: "https://expense-tracker-react-practice-ed.netlify.app",
    apiDocumentation: "",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "practice project",
    techStack: ["ReactJS"],
    github: "https://github.com/covaci-edvin/expense-tracker",
    live: "https://trillo-traveling.netlify.app/",
    apiDocumentation: "",
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
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "personal portfolio",
    techStack: ["ReactJS", "SASS"],
    github: "https://github.com/covaci-edvin/personal-portfolio-covaci-edvin",
    live: "https://personal-portfolio-covaci-edvin.vercel.app/",
    apiDocumentation: "",
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
          />
        ))}
      </div>
    </Element>
  );
};

export default Work;
