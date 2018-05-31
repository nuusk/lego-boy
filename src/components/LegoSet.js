import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({
  viewStyle: {
    borderRadius: 2,
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
  sectionStyle: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 20,
    color: '#000'
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
        <Image
          style={styles.imageStyle}
          source={{uri: this.props.imageURL}}
        />
      </View>
    );
  }
}
