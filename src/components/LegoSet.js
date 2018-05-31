import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    height: 60,
    padding: 15,
    marginTop: 4,
    marginLeft: 2,
    marginRight: 2,
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

export default class LegoSet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.name}</Text>
      </View>
    );
  }
}
