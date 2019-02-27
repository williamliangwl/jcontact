import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './FloatingButton.styles';

export class FloatingButton extends React.PureComponent {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }
}