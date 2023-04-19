import classes from "./Link.module.scss";

const Link = (props) => {
  return (
    <a className={classes.link} href={props.url} target="_blank">
      <div className={classes.link__container}>
        <img src={props.icon} className={classes.link__logo} alt="logo" />
      </div>
    </a>
  );
};

export default Link;
