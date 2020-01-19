import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/home/Home';
import SubjectScreen from './components/subject/Subject';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Subject: SubjectScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component{
  render() {
    return (
        <RootStack />
    );
  }
}