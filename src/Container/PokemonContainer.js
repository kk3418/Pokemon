import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/get-pokemon'
import {Pokemon} from '../Component/Pokemon'

export function PokemonContainer(){
      const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 10 },
    })
      return (
        <>
          {pokemons.map(item => <Pokemon key={item.id} pokemon={item} /> )}
          </>
      )
}


