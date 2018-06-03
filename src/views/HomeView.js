import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  titleStyle: {
    fontWeight: "700"
  },
  buttonStyle: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },
  containerStyle: {
    marginTop: 20
  }
});

export default class HomeView extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Button
          title="LOGIN"
          loading
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          titleStyle={ styles.titleStyle }
          buttonStyle={ styles.buttonStyle }
          containerStyle={ styles.containerStyle }
        />
        <Button
          title="REGISTER"
          loading
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          titleStyle={ styles.titleStyle }
          buttonStyle={ styles.buttonStyle }
          containerStyle={ styles.containerStyle }
        />
      </View>
    );
  }
}
