import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20,
    color: '#000'
  }
};

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
