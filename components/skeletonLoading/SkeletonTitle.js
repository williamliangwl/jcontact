import * as React from 'react';
import { View } from 'react-native';
import styles from './Skeleton.style';

export class SkeletonTitle extends React.PureComponent {
  render() {
    return (
      <View style={[styles.skeletonTitle, this.props.style]} />
    );
  }
}