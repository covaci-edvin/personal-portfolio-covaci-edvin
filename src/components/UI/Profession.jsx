import classes from "./Profession.module.scss";

export const Profession = (props) => {
  return <div className={classes.profession}>{props.profession}</div>;
};
