import { StyleSheet } from 'react-native';
import { color } from '../../themes/color';

export default StyleSheet.create({
  skeletonTitle: {
    width: 150,
    height: 20,
    marginVertical: 5,
    backgroundColor: color.gray
  },
  skeletonRoundImage: {
    padding: 10,
    backgroundColor: color.gray,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: color.gray,
    width: 60,
    height: 60
  },
})