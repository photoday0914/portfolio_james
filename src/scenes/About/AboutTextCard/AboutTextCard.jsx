import s from "./AboutTextCard.module.scss";

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am{" "}
        <span className={s.purple}> James Brown. </span>
        <br />
        Skilled Full Stack Web&Mobile Developer.
        <br />
        <br /> Bachelor's Degree in Computer Science from
        <br />
        The University of Virginia.
        <br />
        <br />
      </p>
    </div>
  );
};

export default AboutTextCard;
