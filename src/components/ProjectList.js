import React, { Component } from 'react';
import {  View, Text, ListView, TouchableOpacity } from 'react-native';

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
      <TouchableOpacity
        activeOpacity={1}
        onPress={()=>{
          this.props.selectProject(project.legoSetID)
        }}
      >
        <Project
          projectID={project.legoSetID}
          name={project.name}
          bricks={project.bricks}
          lastModified={project.lastModified}
          selectedProjectID={this.state.selectedProjectID}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.projects}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

// <ScrollView>
//         { projectList }
//       </ScrollView>