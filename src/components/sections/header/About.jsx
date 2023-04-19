import classes from "./About.module.scss";
import { Profession } from "../../UI/Profession";

const About = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.container__greeting}>hello, I'm</h2>
      <h1 className={classes.container__name}>Edvin Covaci</h1>
      <div className={classes.container__professions}>
        <Profession profession="Front-end" />
        <Profession profession="UI/UX" />
      </div>
    </div>
  );
};

export default About;
