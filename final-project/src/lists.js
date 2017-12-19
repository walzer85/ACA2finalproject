import { Component } from 'react'
import './lists.css'

class Lists extends Component {
  static propTypes = {
    viewer: React.PropTypes.object;
  }

  render() {
    return (
      <div className='root'>
      <div className='title'>
        {`There are ${this.props.viewer.allPokemon.edges.length} Pokemon in your Pokedex!  Have you caught them all!?`}
      </div>
      <div className='container'>
        {this.props.viewer.allPokemon.edges.map((edge) => edge.node).map((pokemon) =>
          <PokemonPreview key={pokemon.id} pokemon={pokemon} />
      )}
        <AddNew />
      </div>
    )
  }
}

export default Lists;
