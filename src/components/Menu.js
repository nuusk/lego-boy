import React, { Component } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, Icon } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 30,
    justifyContent: 'center',
    // backgroundColor: 'rgba(0,0,0,0)'
    backgroundColor: '#e0e2e3'
    
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#2a2c5a'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 30,
    // borderWidth: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // flex: 1
  },
  red: {
    backgroundColor: "#f44274"
  },
  redBorder: {
    borderColor: "#f44274",
    borderWidth: 4,
    borderTopWidth: 0,
  },
  yellow: {
    backgroundColor: "#f7c32e"
  },
  yellowBorder: {
    borderColor: "#f7c32e",
    borderWidth: 4,
    borderTopWidth: 0,
  }
});

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        this.props.currentView === 'setsView' || this.props.currentView === 'projectsView' ?
        <View style={styles.viewStyle}>
        <TouchableOpacity
          style={[styles.buttonStyle, this.props.currentView === 'setsView' ? styles.red : styles.redBorder]}
          onPress={ () => { this.props.changeView('setsView') } }
        >
          <Text style={styles.textStyle}> All sets </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, this.props.currentView === 'projectsView' ? styles.yellow : styles.yellowBorder]}
          onPress={ () => { this.props.changeView('projectsView') } }
        >
          <Text style={styles.textStyle}> Projects </Text>
        </TouchableOpacity>
      </View>
      :null
    );
  }
}
