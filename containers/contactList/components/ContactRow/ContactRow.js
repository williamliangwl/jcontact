import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ContactRow.styles';

export class ContactRow extends React.PureComponent {
  render() {
    const { contact: { id, firstName, lastName, age, photo }, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
        <Image
          source={{ uri: photo }}
          style={styles.profilePic}
        />

        <View>
          <Text style={styles.name}>{firstName} {lastName}</Text>
          <Text>Age {age}</Text>
        </View>
      </TouchableOpacity >
    )
  }
}