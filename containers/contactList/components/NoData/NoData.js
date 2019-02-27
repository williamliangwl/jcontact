import React from 'react';
import { View, Text } from 'react-native';
import styles from './NoData.style';

export class NoData extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Data Available</Text>
      </View>
    )
  }
}