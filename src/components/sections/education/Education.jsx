import Course from "./Course";
import classes from "./Education.module.scss";
import { Element } from "react-scroll";

const courses = [
  {
    id: 1,
    title: "Information Technology",
    school: "Tehnical University of Moldova",
    schoolType: "university",
    schoolLink: "https://utm.md/en/",
    date: "2019 - 2023",
    inProgress: false,
    certificateLink: "",
  },
  {
    id: 2,
    title: "React - React Router, Redux",
    school: "Udemy",
    schoolType: "e-learning",
    schoolLink: "https://www.udemy.com/",
    date: "Feb 2023",
    inProgress: true,
    certificateLink:
      "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?kw=reac&src=sac",
  },
  {
    id: 3,
    title: "NodeJS, Express, MongoDB",
    school: "Udemy",
    schoolType: "e-learning",
    schoolLink: "https://www.udemy.com/",
    date: "Nov 2022 - Feb 2023",
    inProgress: false,
    certificateLink:
      "https://www.udemy.com/certificate/UC-752eddb4-7547-4aaf-adad-257a467b604a/",
  },
  {
    id: 4,
    title: "Real Profile",
    school: "Mihai Eminescu Lyceum",
    schoolType: "university",
    schoolLink: "http://ltsloboziamare.educ.md",
    date: "2016 - 2019",
    inProgress: false,
    certificateLink: "",
  },
];

const Education = () => {
  return (
    <Element name="education" className={classes.education}>
      <h2 className={classes.education__title}>Education</h2>
      <div className={classes.education__courses}>
        {courses.map((course) => (
          <Course
            key={course.id}
            title={course.title}
            school={course.school}
            schoolType={course.schoolType}
            date={course.date}
            inProgress={course.inProgress}
            certificateLink={course.certificateLink}
            schoolLink={course.schoolLink}
          />
        ))}
      </div>
    </Element>
  );
};

export default Education;
