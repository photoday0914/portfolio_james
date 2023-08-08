import s from "./TechSkills.module.scss";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  // DiMysql,
  DiGo,
  DiPhp,
  // DiHtml5,
  // DiCss3,
  DiPython,
} from "react-icons/di";
import {
  // SiRedux,
  SiAmazonaws,
  SiSolidity,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>

      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <SiExpress />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiGo />
      </li>
      <li className={s.techIcon}>
        <DiPhp />
      </li>
      <li className={s.techIcon}>
        <SiPostgresql />
      </li>
      <li className={s.techIcon}>
        <SiSolidity />
      </li>
    </ul>
  );
};

export default TechSkills;
