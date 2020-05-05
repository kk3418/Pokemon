import React, {useState} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS , GET_POKEMON_NAME } from '../graphql/get-pokemon'
import {Pokemon} from '../Component/Pokemon'


export function PokemonContainer({find, isSearch}){
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 200 }
  })
  const pokemon_display =  pokemons.map(item => <Pokemon key={item.id} pokemon={item} />)
  let result
  pokemons.forEach(Element => {
    if (Element.name === find){
      result = <Pokemon key={Element.id} pokemon={Element} />
    }
  })

  return (
  <>
    {
      isSearch ?
      result
      :
      pokemon_display
    }
  </>
  )
}

export function Search(){
  const [find, setFind] = useState("")
  const {data: {pokemon = {} } = {}} = useQuery(GET_POKEMON_NAME, {
    variables : { id: "", name: find },
  })
  function handleClick(){
    console.log(pokemon.maxHP)
  }
  function handleChange(event){
    setFind(event.target.value)
  }
  return (
    <div className="search-box">
      <input id="insert" name="findPokemon" value={find}
        type="text" onChange={handleChange}
        placeholder="type pokemon's name" 
        />
      <button id="click" onClick={handleClick}>search</button>
    </div>
  )
}






