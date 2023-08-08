import s from "./IntroSection.module.scss";
// import avatar from "../../../assets/photo.png";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
// import Tilt from "react-parallax-tilt";
// import { LazyLoadImage } from "react-lazy-load-image-component";

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
              I am a dedicated full-stack web developer with 10+ years of
              experience <br />
              building
              <i>
                <b className={s.purple}> Web&Mobile Applications.</b>
              </i>
            </p>

            <p>
              
              And I also have an excellent coding and testing ability ensuring optimal 
              <br />              
              <i>
                <b className={s.purple}>
                  {" "}
                  functionality, quality, and reliability.
                </b>
              </i>
            </p>
          </div>
        </div>

        {/* <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} width={300} />
        </Tilt> */}
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}> connect </span>with me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="mailto:jameswn0710@gmail.com"
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
