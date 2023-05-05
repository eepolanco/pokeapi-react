import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlice';
import { pokemonSlice } from './slices/pokemons/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

  },
});