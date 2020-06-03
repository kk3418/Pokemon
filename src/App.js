import React, {useState} from 'react'
import {PokemonContainer} from './Container/PokemonContainer'
import {Search} from './Component/search'
import './style.css'
import {ReactComponent as Reorder} from './reorder-24px.svg'

function App(){

  const [find, setFind] = useState("")
  const [page, setPage] = useState("5")
  const [expand, setExpand] = useState(true)

  return (
    <>
      <nav>
        <div className="nav-toggle">
          <button onClick={
            () => setExpand(!expand)
          }>
            <Reorder />
          </button>
        </div>
        <Search trans={{ setFind, setPage, expand}}/>
      </nav>
      <main style={
        {
          justifyContent: find !== "" ? "center" : "space-around"
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