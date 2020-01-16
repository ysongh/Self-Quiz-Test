import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Home from './components/home/Home';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});