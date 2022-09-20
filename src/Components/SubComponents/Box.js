import React, { useEffect, useState } from 'react'

export default function Box({pokemon}) {
    let [moreData, setMoreData] = useState([]);
    useEffect(() => {
        let URL = pokemon.url;
        fetch(URL)
        .then(response => response.json())
        .then(data => {
        if (data) {
            console.log(data)
            setMoreData(data)
        }
        })
        .catch(console.log)
        },[pokemon.url])
  return (
    <div className='box'  style={{ cursor: "pointer" }}>
      <div className='info'>
        <span >Name - {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
        <span >Id - {moreData.id}</span>
        <span >Height - {moreData.height}</span>
        <span >Weight - {moreData.weight}</span>
        <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${moreData.id}.svg`} alt="pokemon img"/>
      </div>
    </div>
  )
}
