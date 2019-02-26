import React from 'react';
import { Alert, Button, View, Image, Text } from 'react-native';
import { ContactApi } from '../../asyncActions/contactApi';

export class ContactDetails extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          title="Delete"
          onPress={navigation.getParam('onDelete', () => { })}
        />
      )
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      contact: null,
      id: 0
    }

    this.confirmDelete = this.confirmDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

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
          this.setState({
            contact: response.data.data
          })
        }
      })
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
    ContactApi.deleteContact(this.props.navigation.getParam("id", ""))
      .then(response => {
        if (response.isSuccess) {
          Alert.alert(
            'Delete Successful',
            'Contact has been deleted',
            [
              { text: 'OK', onPress: this.props.navigation.goBack() },
            ]
          )
        }
      })
  }

  render() {
    if (!this.state.contact) {
      return null;
    }

    const { id, firstName, lastName, photo, age } = this.state.contact;
    return (
      <View>
        <View>
          <Image
            source={{ uri: photo }}
          />
        </View>
        <View>
          <Text>{firstName} {lastName}</Text>
          <Text>{age}</Text>
        </View>
      </View>
    )
  }
}