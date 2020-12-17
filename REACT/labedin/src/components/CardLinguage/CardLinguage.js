import React from 'react';
import './CardLinguage.css'

function CardLinguage(props) {
    return (
        <div className="linguage-container">
            <h4>{props.idiomas}</h4>
            <h4>{props.nivel}</h4>
            <img src={props.imagem}/>
        </div>
    )
}

export default CardLinguage;