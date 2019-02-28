import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { rationaleMap } from '../constants/permissions';

export const PermissionHelper = {
  request: async (permissions) => {
    if (Platform.OS === 'ios' || Platform.Version < 23) {
      return true;
    }

    let result = true;

    for (const permission of permissions) {
      const now = Date.now();
      const permissionResult = await PermissionsAndroid.request(permission);
      if (permissionResult === 'never_ask_again' && Date.now() - now < 250) {
        const rationale = rationaleMap[permission];

        Alert.alert(
          rationale.title,
          rationale.description,
          [
            {
              text: 'OK',
            }
          ]
        );
      }

      result = result && permissionResult === 'granted';
    }

    return result;
  }
}