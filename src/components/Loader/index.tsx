import React, {useEffect} from 'react';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  cancelAnimation,
  withSpring,
} from 'react-native-reanimated';

const Loader = () => {
  const theme = useTheme();
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotateZ: `${rotation.value}deg`},
        {scale: withSpring(scale.value)},
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      200,
    );

    scale.value = withRepeat(
      withTiming(1.3, {
        duration: 1000,
      }),
      400,
    );

    return () => {
      cancelAnimation(rotation);
      cancelAnimation(scale);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[animatedStyle]}>
      <Icon name="spinner" size={48} color={theme.colors.primary} />
    </Animated.View>
  );
};

export default Loader;
