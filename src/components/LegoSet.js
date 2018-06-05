import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, Image } from 'react-native';

// e4904e orange
// f7c32e yellow
const styles = StyleSheet.create({
  viewStyle: {
    borderRadius: 2,
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
    marginLeft: 6,
    marginRight: 6,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
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
    padding: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e4904e'
  },
  descriptionStyle: {
    padding: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7b7884'
  },
  imageStyle: {
    width: 50,
    height: 50
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
        <Text style={styles.descriptionStyle}>{this.props.legoSetID}</Text>
      </View>
    );
  }
}

// <Image
// style={styles.imageStyle}
// source={{uri: this.props.imageURL}}
// />