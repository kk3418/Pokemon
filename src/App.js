import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import {Search} from './Component/search.js'
import {PokemonContainer} from './Container/PokemonContainer'
import './style.css'

function App(){
    const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })
  return (
    <ApolloProvider client={client}>
      <nav>
        <Search />
      </nav>
      <main>
        <PokemonContainer/>
      </main>
    </ApolloProvider>
  )
}

export default App