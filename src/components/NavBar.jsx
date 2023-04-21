import classes from "./NavBar.module.scss";
import Logo from "../assets/logo.svg";
import Button from "../components/UI/Button";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import useMediaQuery from "../utils/useMediaQuery";
import { Transition } from "react-transition-group";
import { useRef } from "react";
import { Link } from "react-scroll";

const duration = 300;

const defaultStyle = {
  transition: `visibility 0s, opacity ${duration}ms ease-in-out`,
  opacity: 0,
  visibility: "hidden",
};

const transitionStyles = {
  entering: { opacity: 1, visibility: "visible" },
  entered: {
    opacity: 1,
    visibility: "visible",
  },
  exiting: {
    opacity: 0,
    visibility: "hidden",
    transition: `visibility ${duration}ms, opacity ${duration}ms ease-in-out`,
  },
  exited: {
    opacity: 0,
    visibility: "hidden",
  },
};

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef(null);

  const matches = useMediaQuery("(max-width: 900px)");

  const toggleMenuHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className={classes.nav}>
      <a href="#">
        <img src={Logo} />
      </a>
      <Transition in={isOpen} timeout={duration} nodeRef={nodeRef}>
        {(state) => (
          <div
            onClick={toggleMenuHandler}
            className={classes.backdrop}
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>

      <ul
        className={`${classes["menu-navigation"]} ${
          isOpen ? classes["menu-enter"] : classes["menu-exit"]
        }`}
      >
        <li>
          <Link to="education" smooth={true} offset={-30} duration={500}>
            <div
              onClick={isOpen ? toggleMenuHandler : null}
              className={classes.link}
            >
              Education
            </div>
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} offset={-30} duration={500}>
            <div
              onClick={isOpen ? toggleMenuHandler : null}
              className={classes.link}
            >
              Work
            </div>
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} offset={-30} duration={500}>
            <div
              onClick={isOpen ? toggleMenuHandler : null}
              className={classes.link}
            >
              Experience
            </div>
          </Link>
        </li>
        <li>
          <Button
            btnText="Contact"
            link="contact"
            handler={isOpen ? toggleMenuHandler : null}
          />
        </li>
      </ul>

      {matches && (
        <Hamburger
          rounded
          toggled={isOpen}
          toggle={setOpen}
          onToggle={toggleMenuHandler}
          size={25}
        />
      )}
    </nav>
  );
}
