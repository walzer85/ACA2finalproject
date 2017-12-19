import React, { Component } from 'react';
import logo from './pokedex.png';
import './App.css';

const styleText = {
  textTransform: 'uppercase',
  color: 'blue',
  fontFamily: 'Courier New',
}
class App extends Component {
  state = {
    characters: null
  };

  componentDidMount(){
   const that = this;
   fetch('https://pokeapi.co/api/v2/pokemon-form/?limit=151&offset=0')
       .then((response) => response.json())
       .then((responseJson) => {
           that.setState({characters: responseJson.results})
       })
       .catch((error) => {
           console.error(error);
       });
  }

  constructor(props) {
     super(props);
     this.state = {open: false};
   }

  //
  renderCharacters(){
      const { characters } = this.state;
      if(characters && characters.length > 0){
          return characters.map((obj, key) =>{
              return <a href={'https://en.wikipedia.org/wiki/' + obj.name}><p style={styleText} key={key}>{obj.name}</p></a>
          })
      }
  }

   render() {
     return (
       <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         </header>
           {this.renderCharacters()}
       </div>
     );
   }
 }

export default App;
