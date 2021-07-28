import react from "react";
import styles from "../../styles/Main.module.css";
import js from "../../assets/JS.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";


const stacks = () =>{
    return(
    <div className={styles.stacks}>
    <h1>Stacks</h1>

    <div className={styles.card1}>
      <img src={js} />
      <img src="https://img.icons8.com/pastel-glyph/64/26e07f/trophy--v1.png" />
    </div>

    <div className={styles.card2}>
      <img src={css} />
      <img src="https://img.icons8.com/pastel-glyph/64/26e07f/trophy--v1.png" />
    </div>

    <div className={styles.card3}>
      <img src={html} />
      <img src="https://img.icons8.com/pastel-glyph/64/26e07f/trophy--v1.png" />
    </div>
  </div>
    )
}

export default stacks;