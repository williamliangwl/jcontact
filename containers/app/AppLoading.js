import React from 'react';
import { View, ActivityIndicator, Text, Modal, Platform } from 'react-native';
import { color } from '../../themes/color';
import styles from './AppLoading.style';
import { connect } from 'react-redux';


const noop = () => { };

class AppLoading extends React.PureComponent {

  renderIosLoading() {
    if (!this.props.showLoading) {
      return null;
    }
    return (
      <View style={styles.iosContainer}>
        {this.renderLoading()}
      </View>
    );
  }

  renderAndroidLoading() {
    return (
      <Modal
        visible={this.props.showLoading}
        transparent={true}
        onRequestClose={noop}
      >
        {/* <StatusBar hidden={false} backgroundColor={color.darkDimBlack} animated /> */}
        {this.renderLoading()}
      </Modal>
    );
  }

  renderLoading() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <ActivityIndicator size="large" color={color.primary} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      Platform.OS === 'ios'
        ? this.renderIosLoading()
        : this.renderAndroidLoading()
    );
  }
}

function mapStateToProps({ ui }) {
  return {
    showLoading: ui.showLoading
  }
}

const Component = connect(mapStateToProps)(AppLoading);
export default Component;