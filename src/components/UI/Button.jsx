import classes from "./Button.module.scss";
import { Link } from "react-scroll";

const Button = (props) => {
  return (
    <Link to={props.link} smooth={true}>
      <div onClick={props.handler} className={classes.btn}>
        {props.btnText}
      </div>
    </Link>
  );
};

export default Button;
