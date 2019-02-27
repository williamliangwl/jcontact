import { StyleSheet } from 'react-native';
import { fonts } from '../../themes/fonts';
import { color } from '../../themes/color';

export default StyleSheet.create({
  container: {
    marginBottom: 5
  },
  textInput: {
    ...fonts.secondaryNormal,
    fontSize: 18
  },
  errorText: {
    ...fonts.smallNormal,
    color: color.error,
    marginLeft: 3
  }
})