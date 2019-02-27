import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './FloatingButton.styles';

export class FloatingButton extends React.PureComponent {
  render() {
    const { title, onPress, name } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon name={name} style={styles.text} />
      </TouchableOpacity>
    )
  }
}