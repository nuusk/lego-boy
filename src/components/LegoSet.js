import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
    color: '#f44274'
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
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
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

export default class LegoSet extends Component {
  constructor(props) {
    super(props);

    this.addProject = this.addProject.bind(this);
  }

  addProject() {
    fetch('https://rocky-inlet-84429.herokuapp.com/api/project', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ legoSetID: this.props.legoSetID }) 
    }).then(blob => {
        if (blob.status === 200) {
          alert('Project created!');
        } else if (blob.status === 409) {
          alert('Project alraedy exists!');
        } else {
          alert('Unforeseen error :(');
        }
      });
  }

  render() {
    return (
      <View style={[styles.viewStyle, {flex: 1, flexDirection: 'row', justifyContent: 'space-between'}]}>
        <View style={{
          justifyContent: 'flex-start',
          flexDirection: 'column',
          position: 'relative'}}>
          <Text style={styles.textStyle}>{this.props.name}</Text>
          <Text style={styles.descriptionStyle}>{this.props.legoSetID}</Text>
        </View>
        <TouchableOpacity
          style={[styles.buttonStyle, styles.red]}
          onPress={ this.addProject }
        >
          <Text style={[styles.textStyle, {color: '#fff', fontSize: 30}]}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// <Image
// style={styles.imageStyle}
// source={{uri: this.props.imageURL}}
// />