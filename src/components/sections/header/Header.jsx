import classes from "./Header.module.scss";
import About from "./About";
import Photo from "./Photo";

const Header = () => {
  return (
    <header className={classes.header}>
      <About />
      <Photo />
    </header>
  );
};

export default Header;
