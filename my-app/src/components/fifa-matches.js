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
  constructor() {
    super();
    this.state = {
      groups: [],
    };
  }
  componentDidMount() {
    //    axios.get(`https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json`)
    axios
      .get(
        `https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json`
      )
      .then(res => {
        const groups = [];
        Object.keys(res.data.groups).map((key, index) => {
          console.log(key, res.data.groups[key]);
          groups.push(res.data.groups[key]);
        });
        // const groups = res.data.groups.map((key,value) => value);
        this.setState({
          groups: groups,
        });
        console.log('state groups ' + this.state.groups[0].name);
        // console.log(this.state.groups.a);
        // console.log(this.state.groups.a.name);
        // console.log(this.state.groups.b);
      })
      .catch(error => {
        console.log('ERROR: ' + error);
        throw error;
      });
  }

  render() {
    if (this.state.groups.length > 0) {
      return (
        <div>
          <header>Groups</header>
          <div>
            <List>
              {this.state.groups.map(group => (
                <div>
                  <ListItem button>{group.name}</ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        </div>
      );
    } else return <div>Hi</div>;
  }
}
