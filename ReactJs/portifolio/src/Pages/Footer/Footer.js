import react from "react";
import styles from "../../styles/Main.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={logo} />
      <a href="https://github.com/carolaine-viana/meus-projetos">
        <img src="https://img.icons8.com/metro/40/000000/github.png"/>
      </a>
      <a href="https://www.linkedin.com/in/carolaineviana/">
        <img src="https://img.icons8.com/android/40/000000/linkedin.png" />{" "}
      </a>
    </div>
  );
};

export default Footer;
