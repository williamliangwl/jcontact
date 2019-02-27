import { ContactList } from '../contactList/ContactList';
import { routes } from '../../constants/routes';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ContactDetails } from '../contactDetails/ContactDetails';
import { AddContact } from '../addContact/AddContact';
import { EditContact } from '../editContact/EditContact';
import { color } from '../../themes/color';

const routesMap = {
  [routes.ContactList]: ContactList,
  [routes.ContactDetails]: ContactDetails,
  [routes.AddContact]: AddContact,
  [routes.EditContact]: EditContact
};

const config = {
  initialRouteName: routes.ContactList,
  defaultNavigationOptions: {
    headerStyle: {
      elevation: 0
    },
    headerTintColor: color.primary
  }
}

const AppNavigator = createStackNavigator(routesMap, config);
export default createAppContainer(AppNavigator);