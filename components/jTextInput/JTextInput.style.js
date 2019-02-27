import { StyleSheet } from 'react-native';
import { fonts } from '../../themes/fonts';
import { color } from '../../themes/color';

export default StyleSheet.create({
  container: {
    marginBottom: 5
  },
  textInput: {
    ...fonts.secondaryNormal,
    // backgroundColor: '#0f0',
  },
  errorText: {
    ...fonts.secondaryNormal,
    color: color.error,
    marginLeft: 3
  }
})