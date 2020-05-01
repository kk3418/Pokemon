import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import {PokemonContainer} from './Container/PokemonContainer'
import './style.css'

function App(){
    const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })
  return (
    <ApolloProvider client={client}>
      <nav>
      </nav>
      <main>
        <PokemonContainer/>
      </main>
    </ApolloProvider>
  )
}

export default App