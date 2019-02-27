import React from 'react';
import { View } from 'react-native';

export class ItemSeparator extends React.PureComponent {
  render() {
    return (
      <View style={{ backgroundColor: 'rgb(238, 238, 238)', height: 1, width: '95%', alignSelf: 'center' }} />
    )
  }
}