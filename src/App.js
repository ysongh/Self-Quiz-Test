import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/home/Home';
import SubjectScreen from './components/subject/Subject';
import QuestionScreen from  './components/question/Question';

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