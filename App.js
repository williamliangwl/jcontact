/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppNavigation from './containers/app/AppNavigation';
import { ContactList } from './containers/contactList/ContactList';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigation />
      </View>
    );
  }
}
