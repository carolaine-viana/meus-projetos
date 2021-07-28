import react from "react";
import styles from "../../styles/Main.module.css";
import logo from "../../assets/logo.png";
import imagem from "../../assets/image-top.png";
import React, { useRef } from "react";


const Resume = () => {
  return (
    <>
      <header>
        <div className={styles.links}>
          <img src={logo} />
          <p>Stacks</p>
          <p>Projects</p>
          <p>About me</p>
        </div>

        {/*********** resume ********** */}

        <div className={styles.container}>
          <div className={styles.resume}>
            <h1>Desenvolvedora Frontend</h1>
            <h2>
              Bem vindo(a) ao meu mundo. Aqui é onde mostro todas as minhas
              experiências e minha paixão, que é desenvolver. Bora trocar
              conhecimentos!
            </h2>
          </div>

          <div className={styles.imageCenter}>
            <img src={imagem} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Resume;
