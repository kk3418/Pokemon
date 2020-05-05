import React, {useState} from 'react'

export function Search(props){
  const {setFind, isSearch, setSearch} = props.trans
  const [tempInput, setTemp] = useState("")

  function handleChange(event){
    setTemp(event.target.value)
    console.log(tempInput)
  }

  function handleClick(){
    setFind(tempInput)
    setSearch(!isSearch)
  }

  return (
    <div className="search-box">
      <input id="insert" name="findPokemon" value={tempInput}
        type="text" onChange={handleChange}
        placeholder="type pokemon's name" 
        />
      <button id="click" onClick={handleClick}>search</button>
    </div>
  )
}