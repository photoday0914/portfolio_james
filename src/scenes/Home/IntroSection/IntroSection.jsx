import s from "./IntroSection.module.scss";
import avatar from "../../../assets/photo.png";
import { SiGmail } from "react-icons/si";
// import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span> MYSELF
          </h1>

          <div className={s.description}>
            <p>
            I am a highly skilled and results-driven               
              <i>
                <b className={s.purple}> Web&Mobile developer </b>
              </i>
              with 12 years of experience in <br />
            designing, developing, and maintaining web applications. 
            <br />
            Proficient in both front-end and back-end technologies,
            
            I specialize in creating user-friendly, <br />responsive, and scalable solutions.  
            </p>

            <p>
              
            I excel at collaborating with cross-functional teams to 
              
              <i>
                <b className={s.purple}>
                  {" "}
                  deliver projects on time and within budget.
                </b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} width={300} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}> connect </span>with me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="mailto:jameskelly93626@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <SiGmail />
            </a>
          </li>
          {/* <li className={s.socialLink}>
            <a
              href="skype:live:.cid.b3d9ff2a1dc3cb3d"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <SiSkype />
            </a>
          </li> */}
          {/* <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/phillip-grandi-58ba32a3"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
