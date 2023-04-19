import classes from "./Contact.module.scss";
import ContactOption from "./ContactOption";
import emailIcon from "../../../assets/mail.svg";
import phoneIcon from "../../../assets/phone.svg";
import linkedinIcon from "../../../assets/linkedin.svg";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact" className={classes.contact}>
      <h2 className={classes.contact__title}>Contact</h2>
      <div className={classes.contact__body}>
        <ContactOption href="mailto:covaci.edvin@gmail.com" icon={emailIcon} />
        <ContactOption href="tel:+37376794690" icon={phoneIcon} />
        <ContactOption
          href="https://www.linkedin.com/in/covaci-edvin/"
          icon={linkedinIcon}
        />
      </div>
    </Element>
  );
};

export default Contact;
