import React from 'react'

export default function PokemonList({ pokemon}) {
    //Here we will be using the destructuring method as same as the app.js
    //Then render into the div section. Anytime you use the .map method in react.js, it requires a key
  return (
    <div>
        {pokemon.map(p => (
            <div key={p}>{p}</div>
        ))}
    </div>
  )
}
