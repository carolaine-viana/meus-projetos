import './App.css';
import Home from './components/Home'
import NewRegister from './components/NewRegister'
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Message from './components/Message';
import {Card, DivMain} from './components/Styled'


export default function App() {

const [screen, setScreen] = useState(0)

const screenSelector = () => {
    if(screen===0){ //se tela for 0 = renderizar página home.
      return (
        <Home/>
      )
    }
    else if(screen===1){ //se tela por 1 = renderizar página messagem.
      return (
        <Message/>
      )
    }else if(screen===3){ //se tela por 3 = renderizar página CADASTRO.
        return (
          <NewRegister/>
      )
    }
    
  }

  const changeScreen = () => {
    if(screen===0){ //se eu estiver na tela home, ir para tela de boas vidas.
        setScreen(1)
    }else if(screen===1){ //se eu estiver na tela de boas vindas, voltar para home.
        setScreen(0)
    }else if(screen===3){ //se eu estiver na tela de cadastro, voltar para home page.
        setScreen(0)
    }
  }

  const Register = () =>{
        setScreen(3) 
  }

  const Page = () =>{
    if(screen===0){
      return(
        <div>
          <p style={{color: 'green'}} onClick={Register}><u><strong>Registre-se aqui</strong></u></p><br/><br/>
          <Button variant="contained" size="large" onClick={changeScreen}>Entrar</Button><br/><br/>
        </div>
      )
    }
    if(screen===1){ //esse botao so vai aparecer quando eu estiver na tela 1
      return(
        <div> 
          <Button variant="outlined" color="secondary" onClick={changeScreen}>LOGOUT</Button><br/><br/>
        </div>
      )
    }

    if(screen===3){ //esse botao so vai aparecer quando eu estiver na tela 3
      return(
        <div>
          <Button onClick={changeScreen} variant="outlined" color="secondary">Voltar</Button>
        </div>
      )
    }
  }

  return(
    <Card>
      <DivMain>
        {screenSelector()}
          {Page()}
        </DivMain>
    </Card>
)
}

