import * as React from 'react';
import { View } from 'react-native';
import styles from './Skeleton.style';

export class SkeletonRoundImage extends React.PureComponent {
  render() {
    return (
      <View style={[styles.skeletonRoundImage, this.props.style]} />
    );
  }
}