import React, {useState} from 'react'
import {PokemonContainer} from './Container/PokemonContainer'
import {Search} from './Component/search'
import './style.css'

function App(){

  const [find, setFind] = useState("")
  const [page, setPage] = useState("5")

  return (
    <>
      <nav>
        <Search trans={{ setFind, setPage }} />
      </nav>
      <main style={
        {
          justifyContent: find !== "" ? "space-evenly" : "space-around"
        }
      }>
        <PokemonContainer
          find={find}
          page={page}
          setFind={setFind} />
      </main>
    </>
  )
}

export default App