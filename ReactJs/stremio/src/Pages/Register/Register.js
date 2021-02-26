import React from 'react';
import styled from 'styled-components';
import MoviesCss from '../Movies/MoviesCss.css'

const Imagemset = styled.img`
    width: 230px;
    height: 345px;
`

export const Register = (props) =>{
    return(
        <div className="conteiner">
            <p>{props.titulo}</p>
            <p>De: {props.diretor}</p>
            <p>{props.categoria}</p>
            <p>{props.ano}</p>
            <Imagemset src={props.imagem}/>
        </div>
        
    )
}

export default Register;