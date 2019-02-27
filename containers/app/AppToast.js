import React from 'react';
import { Platform, ToastAndroid, Alert } from 'react-native';
import { connect } from 'react-redux';
import { toastDisplayed } from '../../actions/uiActions';

class AppToast extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error && this.props.error) {
      const { error } = this.props;
      if (Platform.OS === 'android') {
        ToastAndroid.show(error, 1);
      } else {
        Alert.alert('Error', error);
      }

      this.props.dispatch(toastDisplayed());
    }
  }

  render() {
    return null;
  }
}

function mapStateToProps({ ui: { error } }) {
  return {
    error
  }
}

export default connect(mapStateToProps)(AppToast);