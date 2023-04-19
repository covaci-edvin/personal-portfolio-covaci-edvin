import classes from "./Project.module.scss";
import githubIcon from "../../../assets/github.svg";
import postmanIcon from "../../../assets/postman.svg";
import liveIcon from "../../../assets/link.svg";
import Link from "./Link";

const Project = (props) => {
  return (
    <div className={classes.project}>
      <h1 className={classes.project__title}>{props.title}</h1>
      <p className={classes.project__description}>( {props.description} )</p>
      <div className={classes["project__tech-stack"]}>
        <h2 className={classes["project__tech-stack-title"]}>
          Main Tech Stack:
        </h2>
        <div className={classes["project__tech-stack-technologies"]}>
          {props.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      <div className={classes["project__links"]}>
        {props.githubLink && <Link icon={githubIcon} url={props.githubLink} />}
        {props.apiDocumentationLink && (
          <Link icon={postmanIcon} url={props.apiDocumentationLink} />
        )}
        {props.liveLink && <Link icon={liveIcon} url={props.liveLink} />}
      </div>
    </div>
  );
};

export default Project;
