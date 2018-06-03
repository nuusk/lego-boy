import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import Header from './components/Header';
import LegoSetList from './components/LegoSetList';
import HomeView from './views/HomeView';

export default class LegoBoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <View>
        <Header text="legoboy"/>
        {
          this.state.isLoggedIn ?
          <LegoSetList />
          : <HomeView />
        }
        
      </View>
    );
  }
}
