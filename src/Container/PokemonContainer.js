import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/get-pokemon'
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






