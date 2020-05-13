import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Accounts from './pages/Accounts';
import { PokemonContext } from './context/poke-context';
import data from './context/pokemon.json'
import './App.css';

function App() {
  const { Provider } = PokemonContext;
  const [pokemon, setPokemon] = useState(data.pokemon);
  const removePokemon = (index) => {
    const copyPoke = Object.assign([], pokemon);
    copyPoke.splice(index, 1);
    setPokemon(copyPoke);
  }
  return (
    <Provider value={{pokemon, removePokemon}}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pokemon' component={Pokemon} />
          <Route exact path='/accounts' component={Accounts} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
