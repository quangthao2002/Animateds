import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

const Ball = () => {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <>
       < Animated.Image
        source={{uri:'https://us.123rf.com/450wm/vantuz/vantuz1502/vantuz150200816/36961409-qu%E1%BA%A3-b%C3%B3ng-m%C3%A0u-%C4%91%E1%BB%8F-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?ver=6'}}
      style={{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        
        position: 'absolute',
        bottom: 0,
        transform: [
          {
            translateY: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -600],
            }),
          },
        ],
        opacity: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      }}
    />
    <Animated.Image
        source={{uri:'https://us.123rf.com/450wm/vantuz/vantuz1502/vantuz150200816/36961409-qu%E1%BA%A3-b%C3%B3ng-m%C3%A0u-%C4%91%E1%BB%8F-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?ver=6'}}
      style={{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        
        position: 'absolute',
        bottom: 0,
        transform: [
          {
            translateY: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -600],
            }),
          },
        ],
        opacity: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      }}
    />
    </>
    
  );
};

export default Ball;