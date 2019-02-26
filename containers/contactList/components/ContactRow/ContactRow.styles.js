import { StyleSheet } from 'react-native';
import { fonts } from '../../../../themes/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  profilePic: {
    width: 80,
    height: 80
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  name: {
    ...fonts.primaryH2
  }
})