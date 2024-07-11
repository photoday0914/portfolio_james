import s from "./About.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import aboutPromoImg from "../../assets/university.png";
import mernWebDevImg from "../../assets/mern_web.png";
import devopsImg from "../../assets/devops.svg";
import dappDevImg from "../../assets/dapp.png";
import AboutTextCard from "./AboutTextCard/AboutTextCard";
import TechSkills from "./TechSkills/TechSkills";
import { ImPointRight } from "react-icons/im";
import Button from "../../components/UIElements/Button/Button";

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Know What <b className={s.purple}>I Do</b>
            </h1>
            <AboutTextCard />
            <Button
              style={{ margin: "auto", width: "15rem" }}
              className="primary"
              href="https://drive.google.com/file/d/1LoQ8YWWQt68m82MjDrHxOQf2PO7ZHSc0/view?usp=sharing"
              target="_blank"
            >
              View My Resume
            </Button>
          </div>
          <div className={s.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div>
        </div>
        <div className={s.about}>
          <div className={s.aboutImg}>
            <img src={mernWebDevImg} alt="about" />
          </div>
          <div className={s.aboutTxt}>
            <h1 className={s.title}>Full-Stack Development</h1>
            <ul>
              <li className={s.aboutActivity}>
                <ImPointRight /> Built many projects using React, PHP, Vue.js and Node.js according to functional and non-functional requirements
              </li>              
              <li className={s.aboutActivity}>
                <ImPointRight /> Built large-scale health care project using AWS EC2, RDS, Vue.js, PHP with third party API integration
              </li>
              <li className={s.aboutActivity}>
                <ImPointRight /> Implemented new user-facing features and built reusable components using React.js and Vue.js.
              </li>
              <li className={s.aboutActivity}>
                <ImPointRight /> Developed responsive web app and mobile projects using React, Golang and Python as business services.
              </li>
              <li className={s.aboutActivity}>
                <ImPointRight />Built features in a full range of applications and services such as admin page, dashboard, database design and etc.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.about}>
          <div className={s.aboutImg}>
            <img src={devopsImg} alt="about" />
          </div>
          <div className={s.aboutTxt}>
            <h1 className={s.title}>Devops Engineering</h1>
            <ul>
              <li className={s.aboutActivity}>
                <ImPointRight /> Automated deployment process using CI/CD tools and implemented microservices using AWS Lambda, SQS and S3 etc.
              </li>
              <li className={s.aboutActivity}>
                <ImPointRight /> Performed unit testing using jest and cypress and wrote clean, well-documented code.
              </li>
              <li className={s.aboutActivity}>
                <ImPointRight /> Deployed web applications automatically using
                Heroku, Netlify, Jenkins etc
              </li>
              <li className={s.aboutActivity}>
                <ImPointRight />
                Created flexible and scalable applications and improve their performance using CDN, code splitting and optimization techniques
              </li>
              <li className={s.aboutActivity}>
                <ImPointRight />Implemented robust, scalable, quick, efficient, well-designed software that is easy to maintain and test.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.about}>
          <div className={s.aboutImg}>
            <img src={dappDevImg} alt="about" />
          </div>
          <div className={s.aboutTxt}>
            <h1 className={s.title}>Web3 DAPP Development</h1>
            <ul>
              <li className={s.aboutActivity}>
                <ImPointRight /> Wrote Solidity contracts for fractionalized
                ownership of physical assets
              </li>              
              <li className={s.aboutActivity}>
                <ImPointRight /> Experience with smart contracts on blockchain
              </li>
              <li className={s.aboutActivity}>
                <ImPointRight /> Worked across the full stack, building highly
                scalable distributed solutions that enable positive user
                experiences and measurable business growth
              </li>             
              <li className={s.aboutActivity}>
                <ImPointRight /> Built backend APIs and services that power new
                products that interact with Ethereum (or other) blockchains
              </li>
            </ul>
          </div>
        </div>
        <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />
      </div>
    </BaseLayout>
  );
};

export default About;
