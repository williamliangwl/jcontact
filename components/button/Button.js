import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';

export class Button extends React.PureComponent {
  render() {
    const { title, onPress, style, textStyle } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}