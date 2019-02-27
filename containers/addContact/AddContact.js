import React from 'react';
import { Alert, View } from 'react-native';
import { JTextInput } from '../../components/jTextInput/JTextInput';
import { ContactApi } from '../../asyncActions/contactApi';
import styles from './AddContact.styles';
import { Button } from '../../components/button/Button';
import { ImageRounded } from '../../components/imageRounded/ImageRounded';

export class AddContact extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      firstNameErr: '',
      lastName: '',
      lastNameErr: '',
      age: '',
      ageErr: '',
      photo: ''
    }

    this.handleOnFirstNameChange = this.handleOnFirstNameChange.bind(this);
    this.handleOnLastNameChange = this.handleOnLastNameChange.bind(this);
    this.handleOnAgeChange = this.handleOnAgeChange.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  handleOnFirstNameChange(firstName) {
    this.setState({ firstName });
  }
  handleOnLastNameChange(lastName) {
    this.setState({ lastName });
  }
  handleOnAgeChange(age) {
    this.setState({ age });
  }

  addContact() {
    const { firstName, lastName, age, photo } = this.state;
    ContactApi.addContact({
      firstName,
      lastName,
      age: +age,
      photo
    }).then(response => {
      Alert.alert(
        'Successful Add Contact',
        'A new contact has been added successfully',
        [
          { text: 'OK', onPress: () => this.props.navigation.goBack() }
        ]
      )
    }).catch(err => { });
  }

  render() {
    const { firstName, firstNameErr, lastName, lastNameErr, age, ageErr } = this.state;

    return (
      <View style={styles.container}>
        <ImageRounded
          source={{ uri: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTM5NTI0MjQ1OTkzNTYzNTY4/prince_william_photo_max_mumby_indigo_getty_images_500321416_croppedjpg.jpg' }}
          style={styles.profPic}
        />
        <JTextInput
          value={firstName}
          onChangeText={this.handleOnFirstNameChange}
          placeholder={'First Name'}
          err={firstNameErr}
        />
        <JTextInput
          value={lastName}
          onChangeText={this.handleOnLastNameChange}
          placeholder={'Last Name'}
          err={lastNameErr}
        />
        <JTextInput
          value={age}
          onChangeText={this.handleOnAgeChange}
          placeholder={'Age'}
          err={ageErr}
          keyboardType={'phone-pad'}
        />
        <Button title="Save" onPress={this.addContact} />
      </View>
    );
  }
}