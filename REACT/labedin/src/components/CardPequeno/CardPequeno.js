import React from 'react';
import './CardPequeno.css'

function cardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem}/>
                <h4>{ props.email }</h4>
            <img src={props.imagem2}/>
                <h4>{ props.endereco }</h4>
                <img src={props.imagem3}/>
                <h4>{ props.telefone }</h4>
        </div>
    )
}

export default cardPequeno;