import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Header from './components/Header';
import LegoSetList from './components/LegoSetList';
import HomeView from './views/HomeView';
import SetsView from './views/SetsView';
import ProjectsView from './views/ProjectsView';
import ProjectDetailsView from './views/ProjectDetailsView';
import Menu from './components/Menu';

export default class LegoBoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      view: 'setsView'
    };
    this.changeView = this.changeView.bind(this);
    this.selectProject = this.selectProject.bind(this);
  }

  changeView(newView) {
    this.setState({
      view: newView,
    });
  }

  selectProject(projectID) {
    this.setState({
      view: 'projectDetailsView',
      selectedProjectID: projectID
    });
  }

  render() {
    let view;
    switch(this.state.view) {
      case 'setsView':
        view = <SetsView />;
        break;
      case 'projectsView':
        view = <ProjectsView selectProject={this.selectProject} />;
        break;
      case 'projectDetailsView':
        view = <ProjectDetailsView projectID={this.state.selectedProjectID}/>;
        break;
      default:
        view = <HomeView />;
        break;
    }
    return (
      <View style={{backgroundColor: '#2a2c5a',}}>
        <Header
          text="lego boy"
          changeView={this.changeView}
        />
        {
          this.state.view === 'setsView' || this.state.view === 'projectsView' ?
          <Menu 
            changeView={this.changeView}
            currentView={this.state.view}
          />
          :null
        }
        
        { view }
      </View>
    );
  }
}
