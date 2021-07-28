import React, { useRef } from "react";
import styles from "../styles/Main.module.css";
import logo from "../assets/logo.png";
import imagem from "../assets/image-top.png";
import js from "../assets/JS.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import colorsButton from "../assets/colorsButton.png";
import stremioapp from "..//assets/stremio-pj.png";
import uberEats from "../assets/uberEats-pj.png";
import appLight from '../assets/Projects/app1.png';

const Main = () => {
  const stacks = useRef(null)
  const executeScroll = () => stacks.current.scrollIntoView()
  const projects = useRef(null)
  const executeScroll1 = () => projects.current.scrollIntoView()
  const aboutme = useRef(null)
  const executeScroll2 = () => aboutme.current.scrollIntoView()

  return (
    <div className={styles.Main}>
      <header>
        <div className={styles.links}>
          <img src={logo} />
          <p onClick={executeScroll} >Stacks</p>
          <p onClick={executeScroll1}>Projects</p>
          <p onClick={executeScroll2}>About me</p>
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

      <div className={styles.stacks} ref={stacks}>
        <h1>Stacks</h1>

        <div className={styles.card1}>
          <img src={js} />
          <img src="https://img.icons8.com/pastel-glyph/64/26e07f/trophy--v1.png" />
        </div>

        <div className={styles.card1}>
          <img src={css} />
          <img src="https://img.icons8.com/pastel-glyph/64/26e07f/trophy--v1.png" />
        </div>

        <div className={styles.card1}>
          <img src={html} />
          <img src="https://img.icons8.com/pastel-glyph/64/26e07f/trophy--v1.png" />
        </div>
      </div>

      <div className={styles.textProject}>
          <h1>Projects</h1>
        </div>
      
      <div className={styles.project} ref={projects}>
      <div className={styles.CardProject}>
        <img src={colorsButton} />
        <p>Movies App</p>
        <p>Descrição: App de lista de filmes</p>
        <p>Feito em: React Native</p>
        <img src={stremioapp} className={styles.imageProject} />
       
      </div>

      <div className={styles.CardProject}>
        <img src={colorsButton} />
        <p>UberEats App - Clone</p>
        <p>Descrição: Projeto clone do uberEats</p>
        <p>Feito em: React.js</p>
        <img src={uberEats} className={styles.imageProject} />
      </div>

      <div className={styles.CardProject}>
        <img src={colorsButton} />
        <p>App de Lampadas</p>
        <p>Descrição: App de lampadas</p>
        <p>Feito em: React Native</p>
        <img src={appLight} className={styles.imageProject} />
        {/* <img
          src="https://img.icons8.com/fluent/48/000000/github.png"
          className={styles.git}
        /> */}
      </div>
    </div>

      <div className={styles.aboutme} ref={aboutme}>
        <div className={styles.cardAboutMe}>
          <h1>Desenvolvedora Front-end</h1>
          <div className={styles.list}>
            <span>React JS</span>
            <span>React native</span>
            <span>Git-hub</span>
            <span>Banco de dados</span>
            <span>QA - testes debbug</span>
            <span>Support Asssistence</span>
            <span>Ingles - avançado</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <img src={logo} />
        <a href="https://github.com/carolaine-viana/meus-projetos">
          <img src="https://img.icons8.com/metro/40/000000/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/carolaineviana/">
          <img src="https://img.icons8.com/android/40/000000/linkedin.png" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Main;
