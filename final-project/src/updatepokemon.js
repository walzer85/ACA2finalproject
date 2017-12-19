import Relay from 'react-relay'

class UpdatePokemonPage extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation{UpdatePokemon}`
  }

  getFatQuery() {
    return Relay.QL`fragment on UpdatePokemonPayLoad {
      viewer
      pokemon
    }
    `
  }

  getConfigurations() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        pokemon: this.props.pokemonID,
      },
    }]
  }

  getVariables() {
    return {
      id: this.props.pokemonID,
      name: this.props.name,
      url: this.props.url,
    }
  }

  getOptimisticResponse() {
    return {
      model: {
        id: this.props.pokemonID,
        viewer: React.PropTypes.object,
        parameters: React.PropTypes.object,
      },
    }
  }
}

export default UpdatePokemonPage;
