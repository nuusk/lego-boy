import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import BrickList from '../components/BrickList';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#e0e2e3',
    height: height-60
  }
});

export default class ProjectDetailsView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <BrickList
          dataURL={`https://rocky-inlet-84429.herokuapp.com/api/project/${this.props.projectID}`}
          incrementURL={`https://rocky-inlet-84429.herokuapp.com/api/increment`}
          decrementURL={`https://rocky-inlet-84429.herokuapp.com/api/decrement`}
          projectID={this.props.projectID}
        />
      </View>
    );
  }
}
