import React from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
export default class FifaStandings extends React.Component {
  state = { data: { teams: [] } };
  componentDidMount() {
    //    axios.get(`https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json`)
    axios
      .get(
        `https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json`
      )
      .then(res => {
        const teams = res.data.teams;

        this.setState({ data: res.data });
        // console.log("state teams" + this.state.data.teams);
        // console.log(this.state);
        // console.log(teams);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <header>Teams</header>
        <List>
          {this.state.data.teams.map(team => (
            <div>
              <ListItem button>{team.name}</ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}
