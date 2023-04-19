import classes from "./Experience.module.scss";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="experience" className={classes.experience}>
      <h2 className={classes.experience__title}>Experience</h2>
      <div className={classes.experience__body}>
        ( can’t wait to fill up this section 😵‍💫 )
      </div>
    </Element>
  );
};

export default Experience;
