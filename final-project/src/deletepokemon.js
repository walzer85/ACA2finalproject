import Relay from 'react-relay';

class DeletePokemonPage extends Relay {

  getMutation() {
    return Relay.QL`mutation{deletePokemon}`
  }

  getFatQuery() {
    return Relay.QL`fragment on deletePokemonPayLoad {
      viewer
      deleteID
    }
    `
  }

  getConfigurations() {
    return [{
      type: 'NODE_DELETE',
      parentName: 'viewer',
      parentID: this.proprs.viewerID,
      connectionName: 'pokemon',
      deletedIDFieldName: 'deleteID',
    }]
  }

  getVariables() {
    return {
      id: this.props.pokemonID,
    }
  }

  getOptimisticResponse() {
    return {
      deletedID: this.props.pokemonID,
    }
  }
}

export default DeletePokemonPage;
