import React from 'react';
import { View, RefreshControl, FlatList } from 'react-native';
import { ContactRow } from './components/ContactRow/ContactRow';
import { routes } from '../../constants/routes';
import { ContactApi } from '../../asyncActions/contactApi';
import { FloatingButton } from '../../components/floatingButton/FloatingButton';
import { ItemSeparator } from '../../components/itemSeparator/ItemSeparator';
import { color } from '../../themes/color';

export class ContactList extends React.Component {

  static navigationOptions = () => {
    return {
      header: null
    }
  };

  constructor() {
    super();
    this.state = {
      contacts: [],
    }

    this.navigateToContactDetails = this.navigateToContactDetails.bind(this);
    this.navigateToAddContact = this.navigateToAddContact.bind(this);
    this.handleRenderContact = this.handleRenderContact.bind(this);
    this.getContacts = this.getContacts.bind(this);
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
      })
      .catch(() => { });
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
          ItemSeparatorComponent={ItemSeparator}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={this.getContacts}
              colors={[color.primary]}
            />
          }
        />
        <FloatingButton name="add" onPress={this.navigateToAddContact} />
      </View>
    );
  }
}