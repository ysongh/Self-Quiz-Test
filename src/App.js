import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SubjectScreen from './screens/SubjectScreen';
import QuestionScreen from  './screens/QuestionScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Subject: SubjectScreen,
    Question: QuestionScreen
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