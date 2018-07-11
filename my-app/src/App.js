import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ButtonDemo from './button-demo';
import ButtonDemo1 from './button-demo1';
import ButtonDemoCustom from './button-demo-custom';
import ButtonDemoComplex from './button-demo-complex';
import FifaStandings from './components/fifa-standings';
import FifaMatches from './components/fifa-matches';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { AccessAlarm, Adjust, Bookmark } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { FileUpload, Delete, KeyboardVoice } from '@material-ui/icons';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Input } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FIFA 2018</h1>
        </header>

        <p className="App-intro">
          Hey there! This App is going to be lots of fun for football fans and
          hype the worldcup excitement.
        </p>

        {/*       
        <ButtonDemo/>
        <ButtonDemo1/>
        <ButtonDemoCustom/>
        <ButtonDemoComplex/> */}
        <FifaStandings />
        <FifaMatches />
      </div>
    );
  }
}

export default App;
