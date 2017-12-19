import React, { Component } from 'react';
import App from './App.js'
import Pokeball from './Pokeball.png'
import FlatButton from 'material-ui/FlatButton';
import Router from 'react-router';

class characterLinks extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <FlatButton
          href={'https://en.wikipedia.org/wiki/' + obj.name}
          label={obj.name}
          secondary={true}
          icon={Pokeball}
        />
      </MuiThemeProvider>
    )
  }
}
