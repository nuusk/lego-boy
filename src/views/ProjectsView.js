import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import ProjectList from '../components/ProjectList';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#e0e2e3'
  }
});

export default class HomeView extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <ProjectList
          dataURL='https://rocky-inlet-84429.herokuapp.com/api/projects'
        />
      </View>
    );
  }
}
