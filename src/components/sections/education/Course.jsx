import classes from "./Course.module.scss";
import UniversityLogo from "../../../assets/university.svg";
import UdemyLogo from "../../../assets/udemy.svg";
import LinkIcon from "../../../assets/link.svg";
import InProgress from "./InProgress";
import Completed from "./Completed";

const Course = (props) => {
  return (
    <div className={classes.card}>
      <a href={props.schoolLink} target="_blank">
        <div className={classes["header"]}>
          <img
            src={props.schoolType === "university" ? UniversityLogo : UdemyLogo}
            className={classes["header__logo"]}
          />
        </div>
      </a>
      <div className={classes["body"]}>
        <h2 className={classes["body__school"]}>{props.school}</h2>
        <h1 className={classes["body__title"]}>{props.title}</h1>
        <div className={classes["body__progress"]}>
          <div className={classes["body__progress__date"]}>{props.date}</div>
          <div className={classes["body__progress__in-progress"]}>
            {props.inProgress ? <InProgress /> : <Completed />}
          </div>
        </div>
      </div>
      {props.certificateLink ? (
        <div className={classes.link}>
          <a href={props.certificateLink}>
            <img className={classes.link__icon} src={LinkIcon} />
          </a>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Course;
