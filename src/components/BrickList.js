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

    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    fetch(this.props.dataURL)
      .then(blob => blob.json())
      .then(data => {
        this.setState({
          bricks: ds.cloneWithRows(data[0].bricks)
        });
      });
  }

  incrementQuantity(brickID) {
    fetch(this.props.incrementURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ legoSetID: this.props.projectID, brickID: brickID })
    }).then(blob => blob.json())
      .then(data => {
        this.setState({
          bricks: ds.cloneWithRows(data[0].bricks)
        });
      });
  }

  decrementQuantity(brickID) {
    fetch(this.props.decrementURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ legoSetID: this.props.projectID, brickID: brickID })
    }).then(blob => blob.json())
      .then(data => {
        this.setState({
          bricks: ds.cloneWithRows(data[0].bricks)
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
        incrementQuantity={this.incrementQuantity}
        decrementQuantity={this.decrementQuantity}
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