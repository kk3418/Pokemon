import React from 'react'

export function Pokemon({pokemon}){
  return (
    <div className="container">
      <p>{pokemon.name}</p>
      <p>{`HP: ${pokemon.maxHP}`}</p>
      <p>{`CP : ${pokemon.maxCP}`}</p>
      <img className="image" src={pokemon.image} alt="ops" />
    </div>
  )
}