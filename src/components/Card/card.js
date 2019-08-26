import React from 'react';
import './card.css';

import estrela from '../../assets/star.png';

/* Fazer um componente aqui mesmo pra retornar a cor da div de acordo com o status
aí importa dentro de card <Nome da Componente /> */

const Card = ({ personagem }) => {
    const status = personagem.status;
    console.log(status);

    return (
        <div className="card-div">
            <img src={personagem.img} alt="avatar-personagem"/>
            <div className="personagem-status">{personagem.status}</div>
            <div className="personagem-bio">
                <h1>{personagem.name}</h1>
                <div className="personagem-nascimento">
                    <img src={estrela} alt="nascimento-personagem"/>
                    <h4>{personagem.birthday}</h4>
                </div>
                <div className="ocupacao">{personagem.occupation[0]} {personagem.occupation[1]}</div> 
            </div> 
        </div>
    );
}

export default Card;