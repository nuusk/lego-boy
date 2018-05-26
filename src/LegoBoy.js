import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import Header from './components/Header';

export default class LegoBoy extends Component {
  render() {
    return (
      <View>
        <Header text="legoboy"/>
      </View>
    );
  }
}
