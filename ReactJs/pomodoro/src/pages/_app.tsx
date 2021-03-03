//tudo que for repetitivo em todas as paginas ex header
import { useState } from "react";
import "../../src/styles/global.css";
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengesContext";
// import Head from 'next/head'; //coloca automaticamente no head do hTML

function MyApp({ Component, pageProps }) {

  return (
    // todos os elementos dentro do provider vao ter acesos como ta no app
    // toda a aplicacao tera acesso
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
