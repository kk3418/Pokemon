import React, {useState} from 'react'

export function Search(props){
  const {setFind, isSearch, setSearch} = props.trans
  const [temp, setTemp] = useState("")

  return (
    <div className="search-box">
      <input id="insert" name="findPokemon" value={temp}
        type="text" onChange={event => setTemp(event.target.value)}
        placeholder="type pokemon's name"
      />
      <button id="click" onClick={() => {
        setSearch(!isSearch)
        setFind(temp)
      }}>
        search
          </button>
    </div>
  )
}