import classes from "./Completed.module.scss";
import CompletedIcon from "../../../assets/completed.svg";

const Completed = () => {
  return (
    <div className={classes.completed}>
      <img src={CompletedIcon} className={classes.completed__icon} />
    </div>
  );
};

export default Completed;
