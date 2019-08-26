import React, { Component } from 'react';

/*Importando os componentes */
import Header from './components/Header/header';
import Titulo from './components/Titulo/titulo';
import CardList from './components/CardList/cardList';
import Card from './components/Card/card'

import './App.css';

const state = {
  
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
      card: Card,
      searchField: '',
    } 
  }

  onSearchChange(event) {
    console.log(event)
  }

  render() {
    return (
      <div className="App">
        <Header searchChance={this.onSearchChange}/>
        <Titulo />
        <CardList />
      </div>
    );
  }  
}

export default App;
