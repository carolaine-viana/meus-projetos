import react from "react";
import styles from "../../styles/Main.module.css";
import colorsButton from "../../assets/colorsButton.png";
import stremioapp from "../../assets/stremio-pj.png";
import uberEats from "../../assets/uberEats-pj.png";
import loja from '../../assets/loja.png';
import pomodoro from '../../assets/pomodoro.png';


const Projects = () => {
  return (
    <div className={styles.project}>
      <div className={styles.CardProject}>
        <img src={colorsButton} />
        <p>Movies App</p>
        <p>App de lista de filmes</p>
        <p>Feito em: React Native</p>
        <img src={stremioapp} className={styles.imageProject} />
       
      </div>

      <div className={styles.CardProject}>
        <img src={colorsButton} />
        <p>UberEats App - clone</p>
        <p>Projeto clone do uberEats</p>
        <p>Feito em: React.js</p>
        <img src={uberEats} className={styles.imageProject} />

        <img
          src="https://img.icons8.com/fluent/48/000000/github.png"
          className={styles.git}
        />
      </div>

      <div className={styles.CardProject}>
        <img src={colorsButton} />
        <p>OLX - Clone</p>
        <p>Loja ecommerce de usados</p>
        <p>Feito em: React.js</p>
        <img src={loja} className={styles.imageProject} />
        <img
          src="https://img.icons8.com/fluent/48/000000/github.png"
          className={styles.git}
        />
      </div>
    </div>
  );
};

export default Projects;
