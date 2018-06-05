import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import Header from './components/Header';
import LegoSetList from './components/LegoSetList';
import HomeView from './views/HomeView';
import SetsView from './views/SetsView';

export default class LegoBoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return (
      <View>
        <Header text="lego boy"/>
        {
          this.state.isLoggedIn ?
          <SetsView />
          : <HomeView />
        }
        
      </View>
    );
  }
}
