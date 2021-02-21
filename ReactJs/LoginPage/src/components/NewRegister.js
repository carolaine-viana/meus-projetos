import React, { useState, useEffect } from "react";
import Logo from '../imagens/logo.png';
import {ImagemOlho} from './Styled'
import Button from '@material-ui/core/Button';
import Olho from '../imagens/olho.png';
import TextField from '@material-ui/core/TextField';


export default function NewRegister(){

    const [password, setPassword] = useState('')
    const [score, setScore] = useState(0)
    const [message, setMessage] = useState('Senha fraca')
    const [type, settype] = useState("password")
    const [email, setemail] = useState("")

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    const handleMessage = () => { //funcao para checar força da senha
        if (score > 0 && score <= 3) {
          setMessage('Senha fraca')
        } else if (score >= 4 && score <= 6) {
          setMessage('Senha média')
        } else if (score > 6) {
          setMessage('Senha forte')
        }
      }

      useEffect(() => {
        handleMessage()
      })
    
      useEffect(() => {
        let newScore = 0
    
        if (password.length > 5) {
          newScore = newScore + 1
        }
    
        if (password.length > 10) {
          newScore += 2
        }
    
        if (/[A-Z]/.test(password)) {
          newScore += 1
        }
    
        if (/\d/.test(password)) {
          newScore += 1
        }
    
        if (
          password.includes("!") ||
          password.includes("@") ||
          password.includes("#")
        ) {
          newScore += 2
        }
    
        setScore(newScore)
      }, [password])  

      const CheckEmail = () =>{
        const re=/\S+@\S+\.\S+/
        return(
            !re.test(String(email).toLowerCase())
        )
      }

    const CheckPassword = () =>{
        if(type==="password"){
            settype("text")
        }else{
            settype("password")
        }
    }

    const pegarInputEmail = (event) => {
        setemail(
            event.target.value
        )
    }

    const Confirm = () =>{
        if(password.length<=6){ //se a senha for menor que 6 digitos, mensagem de senha fraca aparece.
            alert('senha fraca!')
        }else{
            alert('cadastrado com sucesso! :)')
        }
      }
    
   
    return(
        <div>
            <img src={Logo}/>
            <h3 style={{color: 'green'}}><strong>Novo registro</strong></h3><br/>
            <TextField placeholder="Email" value={email} variant="outlined" onChange={pegarInputEmail} error={CheckEmail()} helperText={CheckEmail()?'Digite um email valido!':''}/><br/><br/>
            <TextField variant="outlined" type={type} placeholder="Senha" onChange={handlePasswordInput} src={Olho} value={password}/><br/><br/>
            <TextField variant="outlined" type={type} placeholder="Confirmar senha" onChange={handlePasswordInput} value={password}/><br/><br/>
            <ImagemOlho src={Olho} onClick={CheckPassword}/>
            <p>{message}</p><br/>
            <progress value={score} min={0} max={7} /><br/><br/>
            <Button variant="contained" onClick={Confirm}>REGISTRAR-SE</Button><br/><br/><br/>
        </div>
    )
}