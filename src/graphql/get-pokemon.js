import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first){
      id
      name
      image
      maxHP
      maxCP
      types
      attacks {
        special {
          name
          damage
          type
        }
        fast {
          name
          damage
          type
        }
      }
    }
  }
`

export const GET_POKEMON_NAME = gql`
  query pokemon($id: String, $name: String!) {
    pokemon(id: $id, name: name) {
      image
      maxHP
      maxCP
      types
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`