import { StyleSheet } from 'react-native';
import { fonts } from '../../../../themes/fonts';
import { color } from '../../../../themes/color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignContent: 'center'
  },
  profilePic: {
    marginRight: 10
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  name: {
    ...fonts.primaryH2,
    color: color.primary
  },
  age: {
    ...fonts.secondaryNormal
  }
})