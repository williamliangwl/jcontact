/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import AppProvider from './AppProvider';
import { name as appName } from './app.json';
import 'babel-polyfill';

AppRegistry.registerComponent(appName, () => AppProvider);
