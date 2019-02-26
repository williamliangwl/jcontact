import { ContactList } from '../contactList/ContactList';
import { routes } from '../../constants/routes';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ContactDetails } from '../contactDetails/ContactDetails';
import { AddContact } from '../addContact/AddContact';

const routesMap = {
  [routes.ContactList]: ContactList,
  [routes.ContactDetails]: ContactDetails,
  [routes.AddContact]: AddContact
};

const config = {
  initialRouteName: routes.ContactList
}

const AppNavigator = createStackNavigator(routesMap, config);
export default createAppContainer(AppNavigator);