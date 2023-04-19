import ecPhoto from "../../../assets/ec-photo.jpeg";
import classes from "./Photo.module.scss";

const Photo = () => {
  return (
    <div className={classes.card}>
      <img src={ecPhoto} alt="Edvin Covaci" className={classes.card__image} />
    </div>
  );
};

export default Photo;
