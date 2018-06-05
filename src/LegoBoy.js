import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';

import Header from './components/Header';
import LegoSetList from './components/LegoSetList';
import HomeView from './views/HomeView';
import SetsView from './views/SetsView';
import ProjectsView from './views/ProjectsView';
import Menu from './components/Menu';

export default class LegoBoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      view: 'setsView'
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({
      view: newView,
    });
  }

  render() {
    let view;
    switch(this.state.view) {
      case 'setsView':
        view = <SetsView />;
        break;
      case 'projectsView':
        view = <ProjectsView />;
        break;
      default:
        view = <HomeView />;
        break;
    }
    return (
      <View>
        <Header text="lego boy"/>
        <Menu 
          changeView={this.changeView}
          currentView={this.state.view}
        />
        { view }
      </View>
    );
  }
}
