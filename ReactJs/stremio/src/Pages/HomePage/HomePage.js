import React from 'react';
import styled from 'styled-components';
import HomePageCss from '../HomePage/HomePage.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.jpg';
import {goToMovies} from '../../Router/Coordinator';
import { useHistory } from 'react-router';

const Input = styled.input`
    width: 20vw;
    height: 3vh;
    border: none;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    font-size: 1rem;
    border:1px solid #f0a591;
`

const Botao = styled.button`
    width: 10vw;
    height: 40px;
    background-color: #8A5AAB;
    text-decoration: none;
    border: none;
    font-size: 1rem;
`

const DivMain = styled.div`
    position: absolute;
    top: 30%;
    left: 10%;
    font-family: 'Varela', sans-serif;
    font-size: 20px;

`


const HomePage = () =>{
    const history = useHistory;
    return(
        <div>
            <div class="content">
                <span>
                    <h1>login</h1>
                </span>
                <DivMain>
                    <p>E-mail:</p><br/>
                    <Input/><br/><br/>
                    <p>Senha:</p><br/>
                    <Input/><br/><br/>
                <Botao onClick={()=>goToMovies(history)}>ENTRAR</Botao>
                </DivMain>
            </div>

        </div>
        
    )
}

export default HomePage;