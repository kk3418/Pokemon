import React from 'react'

export function Pokemon({pokemon}){
  const {special} = pokemon.attacks
  const typeString = pokemon.types.map((type, i) => {
    let space = "1.5rem"
    if (i === 0) space = "1rem"
    return (
      <span style={ {paddingLeft: space} }>
        {` ${type}`}
      </span>
    )
  })
  
  return (
    <div className="container">
      <h2>{pokemon.name}</h2>
      <p>
        {`HP: ${pokemon.maxHP}`}
        <span style={ {paddingLeft: "1rem"} }>
          {`CP : ${pokemon.maxCP}`}
        </span>
      </p>
      <p>
        TYPES : 
          {typeString}
      </p>
      <img className="image" src={pokemon.image} alt="ops" />
      <br/>
      <div className="attacks">
        {special.map(item => (
          <div className="special-attack"
            key={`${pokemon.name}-${item.name}`}>
            <p>{item.name}</p>
            <p>{item.damage}</p>
          </div>
        ))}
      </div>
    </div>
  )
}