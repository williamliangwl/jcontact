import React from 'react';
import { Button } from './Button';
import styles from './HeaderButton.style';

export class HeaderButton extends React.PureComponent {
  render() {
    const { title, onPress, textStyle } = this.props;
    return (
      <Button
        title={title}
        onPress={onPress}
        style={styles.container}
        textStyle={[styles.text, textStyle]}
      />
    );
  }
}