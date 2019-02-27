import React from "react";
import { View, Text, TextInput } from 'react-native';
import styles from './JTextInput.style';
import { color } from "../../themes/color";

export class JTextInput extends React.Component {
  render() {
    const { err } = this.props;
    const isError = !!err;

    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.textInput}
          underlineColorAndroid={isError ? color.error : color.primary}
        />
        {isError && <Text style={styles.errorText}>{err}</Text>}
      </View>
    );
  }
}