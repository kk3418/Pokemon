import React from 'react'

export function Pokemon({pokemon, focus}){

  const {special} = pokemon.attacks
  const typeString = pokemon.types.map((type, i) => {
    let space = "1.5rem"
    if (i === 0) space = "0.75rem"
    return (
      <span key={type + String(i)}
      style={ {paddingLeft: space} }>
        {type}
      </span>
    )
  })
  const focusId = focus

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
        <span>TYPES :</span>
        {typeString}
      </p>
      <img className="image" src={pokemon.image} alt="ops" id={focusId} />
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