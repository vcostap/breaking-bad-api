import React, {Component} from 'react';
import axios from 'axios';

import Card from '../Card/card';
import './cardList.css';

class CardList extends Component {
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
  
    render () {
      return (
        <div className='conteudo'>
            {
              this.state.personagens.map((personagem) => (
                  <Card personagem={personagem} />
              ))
            }
        </div>
      );
    }
  }
  
  export default CardList;