import React, { Component } from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';
import PokemonCard from ''
import logo from './logo.svg';
import './App.css';

class PokemonCard extends Component {

  static propTypes = {
    viewer: React.PropTypes.object,
    parameters: React.PropTypes.object,
  }

  static contextTypes = {
    router: React.PropTypes.object,
  }

  constructor(props){
    super(props)
    this.state = {
      name: this._isAddNew() ? '' : this.props.viewer.Pokemon.name,
      url: this._isAddNew() ? '' : this.props.viewer.Pokemon.url,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PokemonCard
          addNew={this._isAddNew()} name={this.state.name} url={this.state.url} onNameChange={(newName) => this.setState({name: newName})}
          onUrlChange={(newUrl) => this.setState({url: newUrl})}
        />
      </div>
    );
  }
}

export default PokemonCard;
