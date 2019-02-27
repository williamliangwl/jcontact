import { StyleSheet } from 'react-native';
import { fonts } from '../../../../themes/fonts';

export default StyleSheet.create({
  container: {
    marginTop: 10
  },
  text: {
    ...fonts.secondaryNormal,
    textAlign: 'center'
  }
})