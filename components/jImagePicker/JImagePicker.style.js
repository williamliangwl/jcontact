import { StyleSheet } from 'react-native';
import { color } from '../../themes/color';

export default StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonContainer: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 100
  },
  icon: {
    textAlign: 'center',
    fontSize: 75
  }
})