import React from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import { ContactRow } from './components/ContactRow/ContactRow';
import { routes } from '../../constants/routes';
import { ContactApi } from '../../asyncActions/contactApi';

export class ContactList extends React.Component {

  constructor() {
    super();
    this.state = {
      contacts: []
    }

    this.navigateToContactDetails = this.navigateToContactDetails.bind(this);
    this.navigateToAddContact = this.navigateToAddContact.bind(this);
    this.handleRenderContact = this.handleRenderContact.bind(this);
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    ContactApi.getContacts()
      .then(response => {
        if (response.data) {
          this.setState({
            contacts: response.data.data
          })
        }
      });
  }

  handleRenderContact({ item }) {
    return (
      <ContactRow
        contact={item}
        onPress={this.navigateToContactDetails}
      />
    );
  }

  navigateToContactDetails(id) {
    this.props.navigation.navigate(routes.ContactDetails, {
      id
    });
  }

  navigateToAddContact() {
    this.props.navigation.navigate(routes.AddContact);
  }

  keyExtractor(contact) {
    return contact.id;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.contacts}
          renderItem={this.handleRenderContact}
          keyExtractor={this.keyExtractor}
          style={{ flex: 1 }}
        />
        <View style={{ position: 'absolute' }}>
          <Button title="Add" onPress={this.navigateToAddContact} />
        </View>
      </View>
    );
  }
}