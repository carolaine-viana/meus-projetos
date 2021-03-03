import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "../../styles/components/CountDown.module.css";

let countDownTimeOut: NodeJS.Timeout; //cancelando a execucao do timeout

export function CountDown() {
  //declarando um estado
  const {startNewChallenge} = useContext(ChallengesContext)
  const [time, setTime] = useState(0.1 * 60); //25 minutos em segundos
  const [isActive, setIsActive] = useState(false); //vai checar se o estado está ativo ou nao ou pausado vai comecar inativo
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); //24.59 = retorna 24 (arredonda)
  const seconds = time % 60; //24.32 % 60 = 68 segundos

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split(""); //25 = 2 e 5. minuto 2 = nao reparte. por isso o paddingstart.
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split(""); //25 = 2 e 5. minuto 2 = nao reparte. por isso o paddingstart.
  
  const contextData = useContext(ChallengesContext);
    console.log(contextData)


  function startCountDown() {
    setIsActive(true); //setei como true o active
  }

  function resetCountDown() {
    clearTimeout(countDownTimeOut);
    setIsActive(false); //vai parar de executar e o useEffect ta usando o active entao vai parar
    setTime(25 * 60); //25 minutos. se abandonar ele reseta pra 25 novamente.
  }

  //useEffect = quando algo mudar ou algo acontecer dispare isso:
  useEffect(() => {
    //se active for true e o time (5 * 60) for maior que 0
    if (isActive === true && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1); //vou tirar 1 segundo cada ciclo do meu countdown
      }, 1000); //executa depois de um segundo
    } else if (isActive === true && time === 0) {
      console.log("finalizou");
      setHasFinished(true); //ele finalizou
      setIsActive(false); //nao ta mais ativo
      startNewChallenge()
    }
    // console.log(isActive);
  }, [isActive, time]); //quero executar sempre que essa variavel (active) mudar
  //sempre deve executar uma funcao ASSIM COMO o TIMER

  return (
    <div>
      <div className={styles.CountDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
        disabled
        className={styles.CountDownButton} //cocatenar duas strings
        onClick={resetCountDown}
      > Ciclo encerrado
        </button>
      ) : (
        <> 
          {isActive ? (
            <button
              type="button"
              className={`${styles.CountDownButton} ${styles.countDownButtonActive}`} //cocatenar duas strings
              onClick={resetCountDown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.CountDownButton}
              onClick={startCountDown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}

      {/* {isActive ? 'abandonar ciclo' : 'iniciar um ciclo'} */}
    </div>
  );
}
