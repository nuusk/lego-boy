import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import LegoSet from './LegoSet';
import { ScrollView } from 'react-native-gesture-handler';

export default class LegoSetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiURL: 'https://rocky-inlet-84429.herokuapp.com',
      legoSets: []
    }
  }

  componentWillMount() {
    fetch(`${this.state.apiURL}/api/legosets`)
      .then(blob => blob.json())
      .then(data => {
        this.setState({
          legoSets: data
        });
      });
  }

  render() {
    const legoSetList = this.state.legoSets.map(legoSet => 
      <LegoSet
        key={legoSet.legoSetID}
        id={legoSet.legoSetID}
        name={legoSet.name}
        imageURL={legoSet.bricks[0].imageURL}
      />
    );
    return (
      <ScrollView>
        { legoSetList }
      </ScrollView>
    );
  }
}
