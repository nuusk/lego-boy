import React, { Component } from 'react';
import {  View, Text, StyleSheet, Modal,TouchableHighlight, Dimensions} from 'react-native';

import LegoSetList from '../components/LegoSetList';
const {height, width} = Dimensions.get('window');
console.log(height);
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#e0e2e3',
    height: height-90
  },
  modalStyle: {
    width: 400,
  }
});

export default class SetsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.viewStyle}>

        <LegoSetList
          dataURL='https://rocky-inlet-84429.herokuapp.com/api/legosets'
          projectsURL='https://rocky-inlet-84429.herokuapp.com/api/projects'
        />
      </View>
    );
  }
}

// <Modal
// animationType="fade"
// transparent={false}
// visible={this.state.modalVisible}
// onRequestClose={() => {
// alert('Modal has been closed.');
// this.setModalVisible(false);
// }}>
// <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 22}}>
//   <View style={styles.modalStyle}>
//     <Text>Hello World!</Text>

//     <TouchableHighlight
//       onPress={() => {
//         this.setModalVisible(!this.state.modalVisible);
//       }}>
//       <Text>Hide Modal</Text>
//     </TouchableHighlight>
//   </View>
// </View>
// </Modal>
// <TouchableHighlight
// onPress={() => {
//   this.setModalVisible(true);
// }}>
// <Text>Show Modal</Text>
// </TouchableHighlight>