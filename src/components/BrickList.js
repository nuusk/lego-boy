import React, { Component } from 'react';
import {  View, Text, ListView } from 'react-native';

import Brick from './Brick';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class BrickList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bricks: ds.cloneWithRows([]),
      ready: false
    }
  }

  componentWillMount() {
    fetch(this.props.dataURL)
      .then(blob => blob.json())
      .then(data => {
        console.log(data[0].bricks);
        this.setState({
          bricks: ds.cloneWithRows(data[0].bricks),
          ready: true
        });
      });
  }

  renderRow(brick) {
    return (
      <Brick
        brickID={brick.brickID}
        name={brick.name}
        imageURL={brick.imageURL}
        ownedQuantity={brick.ownedQuantity}
        requiredQuantity={brick.requiredQuantity}
      />
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.bricks}
        renderRow={this.renderRow}
      />
    );
  }
}

// <ScrollView>
//         { brickList }
//       </ScrollView>