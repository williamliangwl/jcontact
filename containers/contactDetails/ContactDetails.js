import React from 'react';
import { Alert, View, Text } from 'react-native';
import { ContactApi } from '../../asyncActions/contactApi';
import { routes } from '../../constants/routes';
import { FloatingButton } from '../../components/floatingButton/FloatingButton';
import styles from './ContactDetails.style';
import { connect } from 'react-redux';
import { setContact, resetContact } from '../../actions/contactActions';
import { ImageRounded } from '../../components/imageRounded/ImageRounded';
import { HeaderButton } from '../../components/button/HeaderButton';

class ContactDetails extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <HeaderButton
          title="Delete"
          textStyle={styles.deleteText}
          onPress={navigation.getParam('onDelete', () => { })}
        />
      )
    }
  };

  constructor(props) {
    super(props);

    this.state = {}

    this.confirmDelete = this.confirmDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.navigateToEditContact = this.navigateToEditContact.bind(this);

    this.props.navigation.setParams({
      onDelete: this.confirmDelete
    })
  }

  componentDidMount() {
    const id = this.props.navigation.getParam("id", "");
    if (!id) {
      this.props.navigation.goBack();
    }

    ContactApi.getContactDetail(id)
      .then(response => {
        if (response.isSuccess) {
          const contact = response.data.data;
          this.props.dispatch(setContact(contact));
        }
      })
  }

  componentWillUnmount() {
    this.props.dispatch(resetContact());
  }

  confirmDelete() {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure want to delete this contact?',
      [
        { text: 'Cancel' },
        { text: 'Sure', onPress: this.handleDelete },
      ]
    )
  }

  handleDelete() {
    ContactApi.deleteContact(this.props.contact.id)
      .then(response => {
        if (response.isSuccess) {
          Alert.alert(
            'Delete Successful',
            'Contact has been deleted',
            [
              { text: 'OK', onPress: () => this.props.navigation.goBack() },
            ]
          )
        }
      }).catch(() => { })
  }

  navigateToEditContact() {
    this.props.navigation.navigate(routes.EditContact);
  }

  render() {
    if (!this.props.contact) {
      return null;
    }

    const { firstName, lastName, photo, age } = this.props.contact;
    return (
      <View style={styles.container}>
        <FloatingButton name="create" onPress={this.navigateToEditContact} />
        <ImageRounded
          source={{ uri: photo }}
          style={styles.profPic}
        />
        <View>
          <Text style={styles.name}>{firstName} {lastName}</Text>
          <Text style={styles.age}>Age {age}</Text>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ contact }) {
  return {
    contact
  }
}

const Component = connect(mapStateToProps)(ContactDetails);
export { Component as ContactDetails }