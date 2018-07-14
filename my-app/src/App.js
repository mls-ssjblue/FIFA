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
import { Input, List, ListItem } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});
class App extends Component {
  render() {
    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    );

    return (
      <div className="App">
        <Router>
          <div>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">FIFA 2018</h1>
            </header>
            <AppBar position="static">
              <Tabs indicatorColor="red" textColor="primary" centered>
                <Tab label="Standings" component={Link} to="/standings" />
                <Tab label="Matches" component={Link} to="/matches" />
                <Tab label="Item Three" component={Link} to="/standings" />
              </Tabs>
            </AppBar>

            <p className="App-intro">
              Hey there! This App is going to be lots of fun for football fans
              and hype up the worldcup excitement.
            </p>

            <Route exact path="/" component={Home} />
            <Route path="/standings" component={FifaStandings} />
            <Route path="/matches" component={FifaMatches} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
