import React, {useState} from 'react'

export function Search(props){
  const {setFind, setPage} = props.trans
  const [temp, setTemp] = useState("")
  
  return (
    <div className="search-box">
      <input id="insert" name="findPokemon" value={temp}
        type="text" onChange={event => setTemp(event.target.value)}
        placeholder="type pokemon"
      />
      <button id="click" onClick={() => {
        setFind(temp)
      }}>
        search
      </button>
      <select id="select-display"
      onChange={
        e => setPage(e.target.value)
      }>
        <option value="5">5</option>
        <option value="15">15</option>
        <option value="25">25</option>
        <option value="35">35</option>
        <option value="45">45</option>
        <option value="all">all</option>
      </select>
    </div>
  )
}