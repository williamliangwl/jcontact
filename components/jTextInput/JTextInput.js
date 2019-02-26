import React from "react";
import { View, Text, TextInput } from 'react-native';

export class JTextInput extends React.Component {
  render() {
    return (
      <TextInput {...this.props} />
    );
  }
}