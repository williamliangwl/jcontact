import React from 'react';
import { Image, View } from 'react-native';
import styles from './ImageRounded.style';

export class ImageRounded extends React.PureComponent {
  render() {
    const { source, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Image source={source} style={[styles.image]} />
      </View>
    );
  }
}