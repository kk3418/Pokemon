import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/get-pokemon'
import {Pokemon} from '../Component/Pokemon'
import {Icon} from '../Component/Icon'

export function PokemonContainer({find, setFind, page}){

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 }
  })
  const s = 0
  const e = page === "all" ? 151 : parseInt(page)
  const [isloading, setLoading] = useState(true)

  useEffect(() => {
    document.getElementById("select-display")
      .disabled = find === "" ? false : true
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  },[find])

  useEffect(() => {
    const f = document.getElementById("need-focus")
    if (null !== f) {
      console.trace("focus")
      f.focus({preventScroll: false})
    }
  },[page])

  useEffect(() => {
    pokemons.length === 0 ? setLoading(true) : setLoading(false)
  },[pokemons])
  
  function Finding(x = find) {
    for (let Element of pokemons) {
      if (Element.name === x) {
        return  <Pokemon pokemon={Element} />
      }
    }
    return <p id="nothing-text">Ops nothing found~~</p>
  }

  return (
    <>
     {
       isloading ? 
        <img id="loading" 
        src={process.env.PUBLIC_URL + "ball-icon.png"}
        alt="loading QQ" /> :
        find !== "" ? 
          <>
            <button id="back-button" onClick={
              () => setFind("")
            }>
              <Icon />
            </button>
            <div className="nothing-text-box">
              {Finding(find)}
            </div>  
          </>
        :
          pokemons.slice(s,e).map((item, index) => <Pokemon 
            key={item.id}
            pokemon={item}
            focus={index === e-1 ? "need-focus" : null}
            />
          )
     }
    </>
  )
}