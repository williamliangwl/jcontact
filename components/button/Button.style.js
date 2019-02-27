import { StyleSheet } from 'react-native';
import { color } from '../../themes/color';
import { fonts } from '../../themes/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: color.primary,
    paddingVertical: 12,
    borderRadius: 10
  },
  text: {
    ...fonts.primaryNormal,
    textAlign: 'center',
    color: '#fff'
  }
})