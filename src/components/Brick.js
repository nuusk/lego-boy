import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';

// e4904e orange
// f7c32e yellow
const styles = StyleSheet.create({
  viewStyle: {
    borderRadius: 2,
    backgroundColor: '#fff',
    padding: 2,
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
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
    margin: 2,
  },
  red: {
    backgroundColor: "#f44274"
  },
  redBorder: {
    borderColor: "#f44274",
    borderWidth: 4,
    borderTopWidth: 0,
  },
  textStyle: {
    padding: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f7c32e'
  },
  descriptionStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7b7884',
    textAlign: 'center'
  },
  quantityStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#7b7884',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  imageStyle: {
    width: 50,
    height: 50
  }
});

export default class Brick extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={[styles.viewStyle, {flexDirection: 'column', justifyContent: 'space-between'}]}>
        <Text style={styles.descriptionStyle}>{this.props.name}</Text>
        <View style={{paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
          
            <Image
              style={styles.imageStyle}
              source={{uri: this.props.imageURL}}
            />        
            <Text style={styles.quantityStyle}>{this.props.ownedQuantity}/{this.props.requiredQuantity}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
             <TouchableOpacity
              style={[styles.buttonStyle, styles.red]}
              onPress={ () => { this.props.incrementQuantity(this.props.brickID) }}
            >
              <Text style={[styles.textStyle, {color: '#fff', fontSize: 30}]}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonStyle, styles.red]}
              onPress={ () => { this.props.decrementQuantity(this.props.brickID) }}
            >
              <Text style={[styles.textStyle, {color: '#fff', fontSize: 30}]}> - </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// <Image
// style={styles.imageStyle}
// source={{uri: this.props.imageURL}}
// />

// <Brick
//         brickID={brick.brickID}
//         name={brick.name}
//         imageURL={brick.imageURL}
//         ownedQuantity={brick.ownedQuantity}
//         requiredQuantity={brick.requiredQuantity}
//       />