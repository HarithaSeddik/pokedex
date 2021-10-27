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

  //Useffect for loading the data from API
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
    //Chain another .then() to use the data from the last response
    .then( res => {
      setAllPokemon([]) // delete old page info
        res.results.forEach(  pokemon => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`) //get information for each pokemon
          .then( res => {
            const data = res.data
            setAllPokemon( currentList => [...currentList, data]) //store in allPokemon array
            // allPokemon.sort((a, b) => a.id - b.id) //OPTIONAL SORTING (would slow down program)
            
          })
        })
    }) 
    return () => cancel()
  }, [currentPageUrl]) //call useEffect upon pageUrl change

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  {if (loading) return 'LOADING...'} //to see loading 
  return (
    //add a context provider to communicate states between component
    <PokemonProvider> 
    <div className="app-container">
      <h1>Pokedex</h1>  
      {/* Pass down functions go children */}
       <Pagination 
          goToNextPage={nextPageUrl? goToNextPage: null} 
          goToPrevPage={prevPageUrl? goToPrevPage: null}/>  

      <div className="pokemon-container">
        {/* Call the PokemonList component */}
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
