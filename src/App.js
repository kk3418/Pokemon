import React, {useState} from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import {PokemonContainer} from './Container/PokemonContainer'
import {Search} from './Component/search'
import './style.css'

function App(){
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })
  const [find, setFind] = useState("")
  const [isSearch, setSearch] = useState({is: false, page: "5"})

  return (
    <ApolloProvider client={client}>
      <nav>
        <Search key={`search`} trans={{setFind, isSearch, setSearch}}/>
      </nav>
      <main>
          <PokemonContainer key={`display`} find={find} 
          isSearch={isSearch} setSearch={setSearch} />
      </main>
    </ApolloProvider>
  )
}

export default App