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
    borderRadius: 15,
    // flex: 1
  },
  orange: {
    backgroundColor: "#e4904e"
  },
  orangeBorder: {
    borderColor: "#e4904e",
    borderWidth: 4,
  },
  yellow: {
    backgroundColor: "#f7c32e"
  },
  yellowBorder: {
    borderColor: "#f7c32e",
    borderWidth: 4,
  },
  yellow: {
    backgroundColor: "#f7c32e"
  }
});

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={[styles.buttonStyle, this.props.currentView === 'setsView' ? styles.orange : styles.orangeBorder]}
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
    );
  }
}
