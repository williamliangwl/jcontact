import { Alert, PermissionsAndroid, Platform } from 'react-native';
import OpenSettings from 'react-native-open-settings';
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
          lang(rationale.title),
          lang(rationale.description),
          [
            {
              text: lang('ok'),
              onPress: openSettingIfDisabled ? OpenSettings.openSettings : noop
            }
          ],
          {
            onDismiss: openSettingIfDisabled ? OpenSettings.openSettings : noop
          }
        );
      }

      result = result && permissionResult === 'granted';
    }

    return result;
  }
}