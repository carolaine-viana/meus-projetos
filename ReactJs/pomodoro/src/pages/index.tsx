import Head from 'next/head';
import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { CountDown } from "../components/CountDown/CountDown";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";
import styles from '../styles/Pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Inicio | move.it</title>
    </Head>
      <ExperienceBar/>
      <section>
        <div> {/* div dos desafios */}
            <Profile />
            <CompletedChallenges />
            <CountDown />
        </div>
        
        <div> { /* div de iniciar os desafios */}
           <ChallengeBox/>
        </div> 
        
      </section>
    </div>
  )
}
 