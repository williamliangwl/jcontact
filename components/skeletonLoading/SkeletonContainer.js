import React from 'react';
import { Animated, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '../../themes/color';

const ANIMATION_WIDTH = 100;

export class SkeletonContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      transformX: new Animated.Value(0),
      width: 0
    };

    this.calculateWidth = this.calculateWidth.bind(this)
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentDidUpdate() {
    this.startAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  calculateWidth({ nativeEvent: { layout } }) {
    const { width } = layout;
    this.setState({ width });
  }

  startAnimation() {
    if (this.state.width > 0) {
      this.state.transformX.setValue(0);

      Animated.loop(
        Animated.timing(this.state.transformX, {
          toValue: this.state.width + ANIMATION_WIDTH,
          duration: 2000,
          useNativeDriver: true
        })).start();
    } else {
      this.stopAnimation();
    }
  }

  stopAnimation() {
    this.state.transformX.stopAnimation();
  }

  render() {
    const animateStyle = {
      position: 'absolute',
      width: ANIMATION_WIDTH,
      top: 0,
      bottom: 0,
      left: -ANIMATION_WIDTH,
      zIndex: 1,
      transform: [{
        translateX: this.state.transformX
      }]
    };

    return (
      <View onLayout={this.calculateWidth} style={this.props.style}>

        <Animated.View style={animateStyle}>
          <LinearGradient
            style={{ flex: 1 }}
            colors={[color.transparent, 'rgba(255, 255, 255, 0.7)', color.transparent]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          />
        </Animated.View>

        {this.props.children}
      </View >
    );
  }

}
