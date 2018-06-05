import React, { Component } from 'react';
import {  View, Text, ListView } from 'react-native';

import Project from './Project';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: ds.cloneWithRows([]),
      ready: false
    }
  }

  componentWillMount() {
    fetch(this.props.dataURL)
      .then(blob => blob.json())
      .then(data => {
        this.setState({
          projects: ds.cloneWithRows(data),
          ready: true
        });
      });
  }

  renderRow(project) {
    return (
      <Project
        projectID={project.legoSetID}
        name={project.name}
        imageURL={project.bricks[0].imageURL}
      />
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.projects}
        renderRow={this.renderRow}
      />
    );
  }
}

// <ScrollView>
//         { projectList }
//       </ScrollView>