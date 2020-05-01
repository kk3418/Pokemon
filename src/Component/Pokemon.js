import React from 'react'

export function Pokemon({pokemon}){
  const {fast, special} = pokemon.attacks
  const typeString = pokemon.types.map((type, i) => {
    let space = "2rem"
    if (i === 0) space = "1rem"
    return (
      <span style={ {paddingLeft: space} }>
        {` ${type}`}
      </span>
    )
  })
  const fastString = fast.map(item => {
    return (
      <option>
        {`fast-attack : ${item.name} ${item.damage} type : ${item.type}`} 
      </option>
    )
  })
  const specialString = special.map(ite => {
    return (
      <option>
        {`special-attack : ${ite.name} ${ite.damage} type : ${ite.type}`} 
      </option>
    )
  })
  
  return (
    <div className="container">
      <h2>{pokemon.name}</h2>
      <p>
        {`HP: ${pokemon.maxHP}`}
        <span style={ {paddingLeft: "3rem"} }>
          {`CP : ${pokemon.maxCP}`}
        </span>
      </p>
      <p>
        TYPES : 
          {typeString}
      </p>
      <img className="image" src={pokemon.image} alt="ops" />
      <br/>
      <select className="attacks">
        {fastString}
        {specialString}
      </select>
    </div>
  )
}