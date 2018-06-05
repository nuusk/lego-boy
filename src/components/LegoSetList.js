import React, { Component } from 'react';
import {  View, Text, ListView } from 'react-native';

import LegoSet from './LegoSet';
import { ScrollView } from 'react-native-gesture-handler';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class LegoSetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiURL: 'https://rocky-inlet-84429.herokuapp.com',
      legoSets: ds.cloneWithRows([]),
      ready: false
    }
  }

  componentWillMount() {
    fetch(`${this.state.apiURL}/api/legosets`)
      .then(blob => blob.json())
      .then(data => {
        this.setState({
          legoSets: ds.cloneWithRows(data),
          ready: true
        });
      });

  }

  renderRow(legoSet) {
    return (
      <LegoSet
        key={legoSet.legoSetID}
        legoSetID={legoSet.legoSetID}
        name={legoSet.name}
        imageURL={legoSet.bricks[0].imageURL}
      />
    );
  }

  render() {
    // const legoSetList = this.state.legoSets.map(legoSet => 
    //   <LegoSet
    //     key={legoSet.legoSetID}
    //     legoSetID={legoSet.legoSetID}
    //     name={legoSet.name}
    //     imageURL={legoSet.bricks[0].imageURL}
    //   />
    // );
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.legoSets}
        renderRow={this.renderRow}
      />
    );
  }
}

// <ScrollView>
//         { legoSetList }
//       </ScrollView>