import React from 'react';
import axios from 'axios';

import './Card.css';

import estrela from '../assets/star.png';

class Card extends React.Component {
    state = {
        personagens: []
      }
    
      async componentDidMount(){
        const result = await axios.get('https://www.breakingbadapi.com/api/characters')
          .then((res) => {
            return res.data;
          })
          .catch((error) => {
            return error;
          })
          
          const personagens = result;
          this.setState({ personagens });
      }


    render() {
        return (
            <div className="card-div">
                <img src={this.personagens.img} alt="avatar-personagem"/>
                <div className="personagem-status">{this.personagens.status}</div>
                <div className="personagem-bio">
                    <h1>{this.personagens.name}</h1>
                    <div className="personagem-nascimento">
                        <img src={estrela} alt="nascimento-personagem"/>
                        <h4>{this.personagens.birthday}</h4>
                    </div>
                    <div className="ocupacao">{this.personagens.occupation}</div> 
                </div> 
            </div>
        );
    }      
}

export default Card;