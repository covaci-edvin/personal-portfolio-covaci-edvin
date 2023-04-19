import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.footer__copy}>
        <span>&copy;</span>
        <span>2021 All rights reserved.</span>
      </div>
      <div className={classes.footer__contacts}>
        <a href="mailto:covaci.edvin@gmail.com">covaci.edvin@gmail.com</a>
        <a href="tel:+37376794690">+373 76794690</a>
        <a href="https://www.linkedin.com/in/covaci-edvin/" target="_blank">
          Linkedin
        </a>
      </div>
    </section>
  );
};

export default Footer;
