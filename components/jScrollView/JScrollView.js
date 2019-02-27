import * as React from 'react';
import { ScrollView } from 'react-native';


export class JScrollView extends React.Component {
  render() {
    return (
      <ScrollView
        {...this.props}
        keyboardShouldPersistTaps={'handled'}
      >
        {this.props.children}
      </ScrollView>
    );
  }

}