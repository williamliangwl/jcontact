import { StyleSheet } from 'react-native';
import { fonts } from '../../themes/fonts';
import { color } from '../../themes/color';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 65,
    height: 65,
    backgroundColor: color.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    ...fonts.primaryH2,
    color: '#fff',
    textAlign: 'center',
  }
})