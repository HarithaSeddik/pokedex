import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import { PokemonProvider } from './components/PokemonContext';
function App() {
  const [allPokemon, setAllPokemon] = useState([]) //initialize array to store pokemon
  const [currentPageUrl, setCurrentPageUrl ] = useState("https://pokeapi.co/api/v2/pokemon?limit=20") //Start with initial page
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true) //display something while loading pokemon from API

  
  useEffect( ()=>{
    setLoading(true) 
    let cancel 
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken( c=> cancel = c) //Clear request using axios clear Token
    }).then(res => {
      setLoading(false) //Don't show loading component
      setNextPageUrl(res.data.next) //Update states for Next and previous
      setPrevPageUrl(res.data.previous)
      const data = res.data
      
      return data
      // const data = results.json()
    })
    .then( res => {
      setAllPokemon([])
        res.results.forEach(  pokemon => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then( res => {
            const data = res.data
            setAllPokemon( currentList => [...currentList, data])
            // setAllPokemon( res.data.results.map(p => p.name))
            
            // allPokemon.sort((a, b) => a.id - b.id)
            
          })
        })
    }) 
    return () => cancel()
  }, [currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  {if (loading) return 'LOADING...'}
  return (
    <PokemonProvider>
    <div className="app-container">
      <h1>Pokedex</h1>  
       <Pagination 
          goToNextPage={nextPageUrl? goToNextPage: null} 
          goToPrevPage={prevPageUrl? goToPrevPage: null}/>  
      <div className="pokemon-container">
        {console.log(prevPageUrl)}
        <PokemonList pokemon={allPokemon}/> 
          <Pagination 
          goToNextPage={nextPageUrl? goToNextPage: null} 
          goToPrevPage={prevPageUrl? goToPrevPage: null}/>
      </div>

    </div>
    </PokemonProvider>
  );
}

export default App;
