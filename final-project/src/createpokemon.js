import Relay from 'react-relay';

class CreatePokemonPage extends Relay {

  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `,
  }

  getMutation() {
    return Relay.QL`mutation{createPokemon}`
  }

  getFatQuery() {
    return Relay.QL`fragment on CreatePokemonPayLoad {
      pokemon
      edge
      viewer {
        allPokemon
      }
    }
    `
  }

  getConfigurations() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'allPokemon',
      edgeName: 'edge',
      rangeBehaviors: {
        '': 'append',
      },
    }]
  }

  getVariables() {
    return {
      name: this.props.name,
      url: this.props.url,
    }
  }


}
