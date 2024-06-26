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
            <p className={s.smallText} style={{textAlign:"left"}}>PHONE NUMBER : +1 (805) 214-8119</p>
            <br />      
            <p className={s.smallText} style={{textAlign:"left"}}>EMAIL ID : jameskelly93626@gmail.com</p>
            <br />
            <div>
              <p className={s.smallText} style={{textAlign:"left"}}>LOCATION : Remote</p>              
              <br />
              <Button
                style={{ margin: "auto", width: "15rem" }}
                className="primary"
                href="https://www.google.com/maps/place/Fort+Pierce,+FL/@27.4294654,-80.3745783,13z/data=!3m1!4b1!4m5!3m4!1s0x88def19fa227b5f1:0xf08617c49b8867ae!8m2!3d27.4467056!4d-80.3256056"
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
