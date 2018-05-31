import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import Header from '../components/Header';
import LegoSetList from '../components/LegoSetList';

export default class LegoBoy extends Component {
  render() {
    return (
      <View>
        <Header text="legoboy"/>
        <LegoSetList />
      </View>
    );
  }
}
