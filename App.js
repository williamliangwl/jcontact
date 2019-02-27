/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigation from './containers/app/AppNavigation';
import AppLoading from './containers/app/AppLoading';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
        <AppNavigation persistenceKey={"nav"} />
        <AppLoading />
      </View>
    );
  }
}
