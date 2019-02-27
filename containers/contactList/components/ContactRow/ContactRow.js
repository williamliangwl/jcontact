import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ContactRow.styles';
import { ImageRounded } from '../../../../components/imageRounded/ImageRounded';

export class ContactRow extends React.PureComponent {
  render() {
    const { contact: { id, firstName, lastName, age, photo }, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
        <ImageRounded
          source={{ uri: photo }}
          style={styles.profilePic}
        />

        <View>
          <Text style={styles.name}>{firstName} {lastName}</Text>
          <Text style={styles.age}>Age {age}</Text>
        </View>
      </TouchableOpacity >
    )
  }
}