import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#2a2c5a',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0
      },
      android: {
        elevation: 4
      }
    })
  },
  textStyle: {
    fontSize: 15,
    color: '#e0e2e3'
  }
});

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={()=>{
            this.props.changeView('setsView')
          }}
        >
          <Text style={styles.textStyle}>{this.props.text.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
