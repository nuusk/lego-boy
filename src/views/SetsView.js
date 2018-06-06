import React, { Component } from 'react';
import {  View, Text, StyleSheet, Modal,TouchableHighlight, Dimensions} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

import LegoSetList from '../components/LegoSetList';
const {height, width} = Dimensions.get('window');
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
      searchBarVisible: true,
      searchIcon: 'close',
      fetchedURL: 'https://rocky-inlet-84429.herokuapp.com/api/legosets'
    }

    this.searchForSets = this.searchForSets.bind(this);

    this.legoList = React.createRef();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  searchForSets(query) {
    clearTimeout(this.fetchingTimer);
    if (query) {
      this.fetchingTimer = setTimeout(function() {
        this.setState({
          fetchedURL: isNaN(query) ? 
          `https://rocky-inlet-84429.herokuapp.com/api/legosets/name/${query.split(' ')[0]}`
          : `https://rocky-inlet-84429.herokuapp.com/api/legoset/${query}`
        }, () => {
          this.legoList.current.fetchData();
        });
      }.bind(this), 800)
    } else {
      this.fetchingTimer = setTimeout(function() {
        this.setState({
          fetchedURL: 'https://rocky-inlet-84429.herokuapp.com/api/legosets'
        }, () => {
          this.legoList.current.fetchData();
        });
      }.bind(this), 800)
    }
  }

  render() {
    return (
      <View style={ styles.viewStyle }>
      {
        this.state.searchBarVisible ? 
        <SearchBar
          lightTheme
          round
          showLoading
          searchIcon={{ size: 0 }}
          inputStyle={{backgroundColor: '#fff', fontSize: 14, borderColor: '#f44274', borderWidth: 2}}
          containerStyle={{ backgroundColor: 'rgba(0,0,0,0)', borderWidth: 0 }}
          onChangeText={this.searchForSets}
          onClear={this.searchForSets}
          placeholder='Search for lego set...'
        />
        :null
      }
        <LegoSetList
          ref={this.legoList}
          dataURL={this.state.fetchedURL}
          projectsURL='https://rocky-inlet-84429.herokuapp.com/api/projects'
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', zIndex: 1, bottom: 0, borderWidth: 0 }}>
        <Icon
          raised
          name={this.state.searchIcon}
          type='font-awesome'
          color='#f44274'
          underlayColor='#fff'
          containerStyle={{backgroundColor: '#e0e2e3'}}
          onPress={() => {
            this.setState({
              searchBarVisible: !this.state.searchBarVisible
            }, () => {
              this.setState({
                searchIcon: this.state.searchBarVisible ? 'close' : 'search'
              });
            });
          }}
        />
      </View>

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