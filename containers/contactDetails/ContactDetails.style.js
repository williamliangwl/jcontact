import { StyleSheet } from 'react-native';
import { fonts } from '../../themes/fonts';
import { color } from '../../themes/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  profPic: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10
  },
  name: {
    ...fonts.primaryH2,
    color: color.primary,
    fontSize: 28,
    marginBottom: 5
  },
  age: {
    ...fonts.secondaryH2
  },
  deleteText: {
    color: color.error
  }
})