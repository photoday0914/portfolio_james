import s from "./Contact.module.scss";
import { ReactComponent as FilesIcon } from "../../assets/contact-us.svg";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/UIElements/Button/Button";
import EmailManager from "./EmailManager";

const Resume = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <div>
            <p className={s.title}>Contact Me</p>
            <br />
            
            <p className={s.smallText} style={{textAlign:"left"}}>
              You can message me, I will reply within 24 hours.
              <br/>
              I can help you with React, AWS, NodeJS, Python, CI/CD, etc.
            </p>
            <br />
            <br />
            <p className={s.smallText} style={{textAlign:"left"}}>PHONE NUMBER : +1 (408) 256-2632</p>
            <br />      
            <p className={s.smallText} style={{textAlign:"left"}}>EMAIL ID : jameskelly93626@gmail.com</p>
            <br />
            <div>
              <p className={s.smallText} style={{textAlign:"left"}}>LOCATION : Remote</p>              
              <br />
              <Button
                style={{ margin: "auto", width: "15rem" }}
                className="primary"
                href="https://www.google.com/maps/place/Phibsborough,+Dublin,+Ireland/@53.3617655,-6.2826566,15z/data=!3m1!4b1!4m6!3m5!1s0x48670dd46b325a31:0x2600c7a7bb391652!8m2!3d53.3608095!4d-6.2726952!16zL20vMDVsMmJx?entry=ttu"
                target="_blank"
              >
                View On Google Maps
              </Button>
            </div>
          </div>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>
        <br />
        <br />
      </div>
      <EmailManager style={{ margin: "auto" }} />
    </BaseLayout>
  );
};

export default Resume;
