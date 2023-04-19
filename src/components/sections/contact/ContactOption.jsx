import classes from "./ContactOption.module.scss";

const ContactOption = (props) => {
  return (
    <a href={props.href} className={classes["contact-option"]} target="_blank">
      <div className={classes["contact-option__container"]}>
        <img
          src={props.icon}
          className={classes["contact-option__icon"]}
          alt="icon"
        />
      </div>
    </a>
  );
};

export default ContactOption;
