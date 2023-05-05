import { useEffect } from "react"
import { getPokemons } from "./store/slices/pokemons/thunks"
import { useDispatch, useSelector } from "react-redux"

export const PokemonApp = () => {

    const dispatch = useDispatch();
    
    const { page, pokemons = [], isLoading } = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    const nextPage = () => {
      dispatch(getPokemons( page + 1));
    }
    
  return (
    <>
    <h1>Pokemon App</h1>
    <span> Loading: { isLoading ? 'true' : 'false'}</span>
    <ul>
      {
        pokemons.map( pokemon => (
          <li key={ pokemon.name }>{pokemon.name}</li>
        ))
      }
    </ul>

    <button disabled= { isLoading } onClick={ nextPage } > Next </button>
    </>
  )
}
