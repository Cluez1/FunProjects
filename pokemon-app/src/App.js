import React, {useState,useEffect} from 'react';
import PokemonList from './PokemonList';
import axios from 'axios'
import Pagination from './Pagination';

function App() {
  // We are going to use the destructuring method by using the brackets//
  //In the useStat, we will add a default pokemon to bulba and charmander
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.next)
      setPokemon(res.data.results.map(p => p.name))
    })
    return () => cancel()

  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return " Loading..."

  
  return (
    //When adding more than one, be sure to use <> to prevent any issues.
    <>
    <PokemonList pokemon={pokemon} />
    <Pagination
    // If the next page url is true, then pass in null
    gotoNextPage={nextPageUrl ? gotoNextPage : null}
    gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
    />
    </>
  );
}

export default App