import React, { useState} from "react";
import Logo from '../imagens/logo.png';
import {ImagemLogo, DivMain, ImagemOlho} from './Styled'
import TextField from '@material-ui/core/TextField';
import Olho from '../imagens/olho.png';

export default function Home(){

    const [type, settype] = useState("password")

    const CheckPassword = () =>{
        if(type==="password"){
            settype("text")
        }else{
            settype("password")
        }
    }

    return(
        <DivMain>
            <ImagemLogo src={Logo}/><br/><br/>
            <h3 style={{color: 'green'}}>Entrar</h3><br/>
            <TextField placeholder="Email" variant="outlined"/><br/><br/>
            <TextField variant="outlined" type={type} placeholder="Senha"/><br/>
            <ImagemOlho src={Olho} onClick={CheckPassword}/>
            <p>Não possui uma conta ainda?</p><br/>
        </DivMain>
    )
}

