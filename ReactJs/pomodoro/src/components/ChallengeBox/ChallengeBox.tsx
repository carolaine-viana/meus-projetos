import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "../../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  // const hasActiveChallenge = true;
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
  //activeChallenge == null? nao tenho um challenge ativo
  //entao nao precisa do hasactive...

  return (
    <div className={styles.ChallengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            {/* quando chegar em 0 ele vai mudar a imagem pro icone de exercicio fisico */}
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            {/* <p>Levante e faca uma caminhada de 3 minutos.</p> */}
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.ChallengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.ChallengeSuceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.ChallengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
