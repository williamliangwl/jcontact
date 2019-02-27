import React from 'react';
import { SkeletonContainer } from '../../../../components/skeletonLoading/SkeletonContainer';
import { SkeletonRoundImage } from '../../../../components/skeletonLoading/SkeletonRoundImage';
import { SkeletonTitle } from '../../../../components/skeletonLoading/SkeletonTitle';
import styles from './ContactDetailsSkeleton.style';

export class ContactDetailsSkeleton extends React.PureComponent {
  render() {
    return (
      <SkeletonContainer style={styles.container}>
        <SkeletonRoundImage style={styles.image} />
        <SkeletonTitle style={styles.name} />
        <SkeletonTitle style={styles.age} />
      </SkeletonContainer>
    )
  }
}