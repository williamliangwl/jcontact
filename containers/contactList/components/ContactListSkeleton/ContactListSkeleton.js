import React from 'react';
import { View } from 'react-native';
import { SkeletonContainer } from '../../../../components/skeletonLoading/SkeletonContainer';
import { SkeletonRoundImage } from '../../../../components/skeletonLoading/SkeletonRoundImage';
import { SkeletonTitle } from '../../../../components/skeletonLoading/SkeletonTitle';
import styles from './ContactListSkeleton.style';

export class ContactListSkeleton extends React.PureComponent {
  render() {
    return (
      <SkeletonContainer>
        <View style={styles.container}>
          <SkeletonRoundImage style={styles.image} />
          <View>
            <SkeletonTitle style={styles.name} />
            <SkeletonTitle style={styles.age} />
          </View>
        </View>
        <View style={styles.container}>
          <SkeletonRoundImage style={styles.image} />
          <View>
            <SkeletonTitle style={styles.name} />
            <SkeletonTitle style={styles.age} />
          </View>
        </View>
      </SkeletonContainer>
    );
  }
}