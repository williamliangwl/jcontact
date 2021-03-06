import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ImageRounded } from '../imageRounded/ImageRounded';
import ImagePicker from 'react-native-image-picker';
import styles from './JImagePicker.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PermissionHelper } from '../../helpers/PermissionHelper';
import { androidPermissions } from '../../constants/permissions';

const options = {
  title: 'Select Photo',
  takePhotoButtonTitle: 'Take Photo',
  chooseFromLibraryButtonTitle: 'Choose from Gallery',
  permissionDenied: {
    reTryTitle: 'Change settings',
    okTitle: 'Cancel'
  }
};

export class JImagePicker extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      uri: this.props.uri || ''
    }

    this.handlePickImage = this.handlePickImage.bind(this);
    this.checkPermission = this.checkPermission.bind(this);
  }

  checkPermission() {
    PermissionHelper.request([
      androidPermissions.writeExternalStorage,
      androidPermissions.readExternalStorage,
      androidPermissions.camera
    ])
      .then(hasPermission => {
        if (hasPermission) {
          this.handlePickImage();
        }
      })
      .catch(() => { });
  }

  handlePickImage() {
    const { onImagePicked } = this.props;
    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel && !response.error) {
        const { uri } = response;
        this.setState({ uri });
        onImagePicked(uri);
      }
    });
  }

  renderImage() {
    if (this.state.uri) {
      return (
        <ImageRounded source={{ uri: this.state.uri }} style={styles.img} />
      );
    }

    return (
      <View style={styles.buttonContainer}>
        <Icon name="camera-alt" style={styles.icon} />
      </View>
    )
  }

  render() {
    return (
      <TouchableOpacity onPress={this.checkPermission}>
        {this.renderImage()}
      </TouchableOpacity>
    );
  }
}