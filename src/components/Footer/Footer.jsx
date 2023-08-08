import s from "./Footer.module.scss";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Copyright © {year} Phillip Grande</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
