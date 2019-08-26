import React, { Component } from 'react';

/*Importando os componentes */
import Header from './components/Header/header';
import Titulo from './components/Titulo/titulo';
import CardList from './components/CardList/cardList';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Titulo />
        <CardList />
      </div>
    );
  }  
}

export default App;
