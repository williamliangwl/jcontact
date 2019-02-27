import { StyleSheet } from 'react-native';
import { fonts } from '../../themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    ...fonts.secondaryNormal,
    borderColor: '#e2e2e2',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
  }
})