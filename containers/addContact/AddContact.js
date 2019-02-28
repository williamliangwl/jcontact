import React from 'react';
import { Alert, ScrollView } from 'react-native';
import { JTextInput } from '../../components/jTextInput/JTextInput';
import { ContactApi } from '../../asyncActions/contactApi';
import styles from './AddContact.styles';
import { Button } from '../../components/button/Button';
import { showLoading, dismissLoading, showErrorAlert } from '../../actions/uiActions';
import { connect } from 'react-redux';
import { JImagePicker } from '../../components/jImagePicker/JImagePicker';
import { ContactValidator } from '../../validator/ContactValidator';
import { notifyUpdate } from '../../actions/contactActions';
import { JScrollView } from '../../components/jScrollView/JScrollView';

class AddContact extends React.Component {
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
    this.handleOnImagePicked = this.handleOnImagePicked.bind(this);
    this.validate = this.validate.bind(this);
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
  handleOnImagePicked(photo) {
    this.setState({ photo });
  }

  validate() {
    const { firstName, lastName, age } = this.state;
    const { firstNameErr, lastNameErr, ageErr } = ContactValidator.validate({ firstName, lastName, age });
    const hasError = firstNameErr || lastNameErr || ageErr;

    if (!hasError) {
      this.addContact()
    }

    this.setState({
      firstNameErr,
      lastNameErr,
      ageErr
    });
  }

  addContact() {
    const { firstName, lastName, age, photo } = this.state;

    // for photo, it should be the URL after the image has been uploaded to server 
    // OR we send the following payload as formData to server,
    // For demo purpose, we use the local uri
    this.props.dispatch(showLoading());
    ContactApi.addContact({
      firstName,
      lastName,
      age: +age,
      photo
    }).then(response => {
      if (response.isSuccess) {
        this.props.dispatch(notifyUpdate());
        Alert.alert(
          'Successful Add Contact',
          'A new contact has been added successfully',
          [
            { text: 'OK', onPress: () => this.props.navigation.goBack() }
          ]
        )
      } else {
        this.props.dispatch(showErrorAlert(response.data));
      }
    }).catch(err => { })
      .then(() => this.props.dispatch(dismissLoading()));
  }

  render() {
    const { firstName, firstNameErr, lastName, lastNameErr, age, ageErr } = this.state;

    return (
      <JScrollView style={styles.container}>
        <JImagePicker onImagePicked={this.handleOnImagePicked} />
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
        <Button title="Save" onPress={this.validate} />
      </JScrollView>
    );
  }
}

const Component = connect()(AddContact);
export { Component as AddContact }