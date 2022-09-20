import React, { useEffect, useState } from 'react'
import Box from './SubComponents/Box'

export default function Body() {
    const [pokeData, setPokeData] = useState([]);
    // const [limit, setLimit] = useState(20)
    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        // console.log(data.results)
        setPokeData(data.results)
      }
    })
    .catch(console.log)
    },[])

    const handleClick = (id) => {

    }

  return (
    <div className='body'>
        {
            pokeData.map((pokemon, index) => {
                return(<Box key={pokemon.id} pokemon={pokemon} handleClick={handleClick}/>)
            })
        }

    </div>
  )
}
