import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#fff',
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
    fontSize: 20,
    color: '#000'
  }
});

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.text}</Text>
      </View>
    );
  }
}
