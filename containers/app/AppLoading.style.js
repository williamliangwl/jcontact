import { StyleSheet } from 'react-native';
import { fonts } from '../../themes/fonts';

export default StyleSheet.create({
  iosContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  loadingText: {
    ...fonts.secondaryNormal,
    marginTop: 8,
  }
}); 