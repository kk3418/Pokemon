import React from 'react'
import {render} from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
, document.getElementById('root'))