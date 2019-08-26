import React, { Component } from 'react';
import axios from 'axios';

/*Importando os componentes */
import Titulo from './components/Titulo/titulo';
import Card from './components/Card/card';

import logo from './assets/logo.png';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      api: [],
      inputSearch: ''
    }
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  async componentDidMount() {
    const url = "https://breakingbadapi.com/api/characters/";

    const result = await axios.get(url)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      })

    const cards = result;
    const api = result;
    this.setState({
      cards,
      api
    })
  }

  onChangeSearch(event) {
    const { api } = this.state;
    const arraySearch = api.filter(function (personagens) {
      const inputSearch = event.target.value.toLowerCase();
      if (inputSearch !== '') {
        return personagens.name.toLowerCase().indexOf(inputSearch) > -1;
      } else {
        return api
      }
    });

    const cards = arraySearch;
    this.setState({
      cards
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container-principal'>
          <header>
            <img src={logo} alt="Breaking Bad logo"/>
            <input 
              type="search"
              placeholder="Pesquise os personagens"
              onChange={this.onChangeSearch}
            />
          </header>

          <Titulo />
          
          <div className='conteudo'>
            {
              this.state.cards.map((personagem) => (
                <Card personagem={personagem} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }  
}

export default App;
