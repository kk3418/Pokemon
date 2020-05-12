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
        setSearch({...isSearch, is: !isSearch.is})
        setFind(temp)
      }}>
        search
      </button>
      <select id="select-display"
      onChange={
        event => setSearch({...isSearch, page: event.target.value})
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