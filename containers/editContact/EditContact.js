import React from 'react';
import { Alert, View, ScrollView } from 'react-native';
import { JTextInput } from '../../components/jTextInput/JTextInput';
import { ContactApi } from '../../asyncActions/contactApi';
import { connect } from 'react-redux';
import { updateContact } from '../../actions/contactActions';
import styles from './EditContact.style';
import { Button } from '../../components/button/Button';
import { showLoading, dismissLoading, showErrorAlert } from '../../actions/uiActions';
import { JImagePicker } from '../../components/jImagePicker/JImagePicker';
import { ContactValidator } from '../../validator/ContactValidator';
import { JScrollView } from '../../components/jScrollView/JScrollView';

class EditContact extends React.Component {
  constructor(props) {
    super(props);

    const { firstName, lastName, age, photo } = this.props.contact;
    this.state = {
      firstName,
      firstNameErr: '',
      lastName,
      lastNameErr: '',
      age: age + '',
      ageErr: '',
      photo: photo || ''
    }


    this.handleOnFirstNameChange = this.handleOnFirstNameChange.bind(this);
    this.handleOnLastNameChange = this.handleOnLastNameChange.bind(this);
    this.handleOnAgeChange = this.handleOnAgeChange.bind(this);
    this.handleOnImagePicked = this.handleOnImagePicked.bind(this);
    this.editContact = this.editContact.bind(this);
    this.validate = this.validate.bind(this);
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
      this.editContact()
    }

    this.setState({
      firstNameErr,
      lastNameErr,
      ageErr
    });
  }

  editContact() {
    const { firstName, lastName, age, photo } = this.state;
    const { id } = this.props.contact;
    const updatedContact = {
      firstName,
      lastName,
      age: +age,
      photo
    }

    this.props.dispatch(showLoading());
    ContactApi.editContact({
      id,
      ...updatedContact
    }).then(response => {
      if (response.isSuccess) {
        this.props.dispatch(updateContact(updatedContact));
        Alert.alert(
          'Successful Edit Contact',
          'The contact details has been updated',
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
    const { firstName, firstNameErr, lastName, lastNameErr, age, ageErr, photo } = this.state;

    return (
      <JScrollView style={styles.container}>
        <JImagePicker onImagePicked={this.handleOnImagePicked} uri={photo} />
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

function mapStateToProps({ contact: { contact } }) {
  return {
    contact
  }
}

const Component = connect(mapStateToProps)(EditContact);
export { Component as EditContact };