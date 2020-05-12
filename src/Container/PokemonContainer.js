import React, {useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/get-pokemon'
import {Pokemon} from '../Component/Pokemon'
import { Display } from '../Component/searchDisplay'

export function PokemonContainer({find, isSearch, setSearch}){
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 200 }
  })
  //console.log(pokemons)

useEffect(() => {
  document.getElementById("select-display").disabled = isSearch.is
},[isSearch.is])
 
  const s = 0
  const e = isSearch.page === "all" ? 200 : parseInt(isSearch.page)

  function Finding(x = find) {
    let render
    for (let Element of pokemons) {
      if (Element.name === x) {
        render = () => <Pokemon pokemon={Element} />
        break
      }
      render = "fail"
    }
    switch (render){
      case undefined :
        render = () => <div><h1>Loading</h1></div>
        break
      case "fail" :
        render = () => <div><h1>Ops ~ no such pokemon</h1></div>
        break
      default :
    }
    return <Display util={{isSearch, setSearch}} render={render} />
  }

  return (
    <>
      {
        isSearch.is ?
          Finding(find)
          :
          pokemons.slice(s, e).map(item => <Pokemon key={item.id} pokemon={item} />)
      }
    </>
  )
}