import React from 'react';
import { View, RefreshControl, FlatList, TextInput } from 'react-native';
import { ContactRow } from './components/ContactRow/ContactRow';
import { routes } from '../../constants/routes';
import { ContactApi } from '../../asyncActions/contactApi';
import { FloatingButton } from '../../components/floatingButton/FloatingButton';
import { ItemSeparator } from '../../components/itemSeparator/ItemSeparator';
import { color } from '../../themes/color';
import styles from './ContactList.style';

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
      filtered: [],
      query: ''
    }

    this.navigateToContactDetails = this.navigateToContactDetails.bind(this);
    this.navigateToAddContact = this.navigateToAddContact.bind(this);
    this.handleRenderContact = this.handleRenderContact.bind(this);
    this.getContacts = this.getContacts.bind(this);
    this.filterContact = this.filterContact.bind(this);
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    ContactApi.getContacts()
      .then(response => {
        if (response.isSuccess) {
          const { data } = response.data
          this.setState({
            contacts: data,
            filtered: data,
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

  filterContact(query) {
    const filtered = this.state.contacts.filter(c => {
      return c.firstName.includes(query) || c.lastName.includes(query)
    });
    this.setState({ query, filtered });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.query}
          onChangeText={this.filterContact}
          style={styles.searchBar}
          placeholder="Filter"
          placeholderTextColor="#999"
        />
        <FlatList
          data={this.state.filtered}
          renderItem={this.handleRenderContact}
          keyExtractor={this.keyExtractor}
          style={styles.container}
          ItemSeparatorComponent={ItemSeparator}
          keyboardShouldPersistTaps={'handled'}
          keyboardDismissMode={'on-drag'}
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