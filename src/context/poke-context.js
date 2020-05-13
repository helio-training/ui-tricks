import React from 'react';

export const PokemonContext = React.createContext({
    pokemon: [],
    removePokemon: () => {} 
})