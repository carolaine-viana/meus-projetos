import React from "react";
import styles from "../../styles/Main.module.css";
import topic from "../../assets/topic.png";


const Skills = () =>{

    return(
        <div className={styles.aboutme} >
        <div className={styles.cardAboutMe}>
            <h1>Carolaine Viana</h1>
            <div className={styles.list}>
              <img src={topic} />
              <span>React JS</span>
              <img src={topic} />
              <span>React native</span>
              <img src={topic} />
              <span>Git-hub</span>
            </div>
        </div>
        
      </div>
    )
}

export default Skills;