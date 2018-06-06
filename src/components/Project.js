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
    color: '#f7c32e'
  },
  descriptionStyle: {
    padding: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7b7884'
  },
  buttonStyle: {
    backgroundColor: '#f44274'
  },
  imageStyle: {
    width: 50,
    height: 50
  }
});

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownedBricks: 0,
      requiredBricks: 0
    }
  }

  componentWillMount() {
    let _tmpOwned = 0;
    let _tmpRequired = 0;
    this.props.bricks.forEach(brick => {
      _tmpRequired += brick.requiredQuantity;
      _tmpOwned += Math.min(brick.ownedQuantity, brick.requiredQuantity);
    });

    this.setState({
      ownedBricks: _tmpOwned,
      requiredBricks: _tmpRequired
    });
  }

  formatDate(x) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    const date = new Date(x);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year + ', ' + ('0'+(hour-2)).slice(-2) + ':' + ('0'+minutes).slice(-2);
  }
  

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.name}</Text>
        <Text style={styles.descriptionStyle}>You have {this.state.ownedBricks} of all {this.state.requiredBricks} bricks.</Text>
        <Text style={styles.descriptionStyle}>Date Modified: {this.formatDate(this.props.lastModified)}.</Text>
      </View>
    );
  }
}

// <Image
// style={styles.imageStyle}
// source={{uri: this.props.imageURL}}
// />