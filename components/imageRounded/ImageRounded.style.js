import { StyleSheet } from 'react-native';
import { color } from '../../themes/color';

export default StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: color.primary,
    borderWidth: 2
  },
  image: {
    flex: 1
  }
})