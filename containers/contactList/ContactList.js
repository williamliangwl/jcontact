import React from 'react';
import { View, RefreshControl, FlatList, TextInput } from 'react-native';
import { ContactRow } from './components/ContactRow/ContactRow';
import { routes } from '../../constants/routes';
import { ContactApi } from '../../asyncActions/contactApi';
import { FloatingButton } from '../../components/floatingButton/FloatingButton';
import { ItemSeparator } from '../../components/itemSeparator/ItemSeparator';
import { color } from '../../themes/color';
import styles from './ContactList.style';
import { ContactListSkeleton } from './components/ContactListSkeleton/ContactListSkeleton';
import { connect } from 'react-redux';
import { updateHandled } from '../../actions/contactActions';
import { showErrorAlert } from '../../actions/uiActions';
import { NoData } from './components/NoData/NoData';

class ContactList extends React.Component {

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
      query: '',
      isLoading: false,
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

  componentDidUpdate(prevProps) {
    if (prevProps.hasUpdate !== this.props.hasUpdate && this.props.hasUpdate) {
      this.getContacts();
      this.props.dispatch(updateHandled());
    }
  }

  getContacts() {
    this.setState({ isLoading: true });
    ContactApi.getContacts()
      .then(response => {
        if (response.isSuccess) {
          const { data } = response.data
          this.setState({
            contacts: data,
            filtered: data,
          })
        } else {
          this.props.dispatch(showErrorAlert(response.data));
        }
      })
      .catch(() => { })
      .then(() => this.setState({ isLoading: false }));
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

  renderList() {
    if (this.state.isLoading) {
      return (
        <ContactListSkeleton />
      );
    }

    return (
      <FlatList
        data={this.state.filtered}
        renderItem={this.handleRenderContact}
        keyExtractor={this.keyExtractor}
        style={styles.container}
        ItemSeparatorComponent={ItemSeparator}
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'on-drag'}
        ListEmptyComponent={NoData}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={this.getContacts}
            colors={[color.primary]}
          />
        }
      />
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput
          value={this.state.query}
          onChangeText={this.filterContact}
          style={styles.searchBar}
          placeholder="Filter"
          placeholderTextColor="#999"
        />
        {this.renderList()}
        <FloatingButton name="add" onPress={this.navigateToAddContact} />
      </View>
    );
  }
}

function mapStateToProps({ contact: { hasUpdate } }) {
  return {
    hasUpdate
  }
}

const Component = connect(mapStateToProps)(ContactList);
export { Component as ContactList };