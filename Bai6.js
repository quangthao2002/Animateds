import React, { useEffect, useRef } from "react";
import { Animated, View, Dimensions } from "react-native";

const Bai6 = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const mouseAnim = useRef(new Animated.ValueXY({ x: windowWidth, y: 0 })).current;
  const catAnim = useRef(new Animated.ValueXY({ x: 0, y: windowHeight })).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(mouseAnim.x, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(mouseAnim.x, {
          toValue: windowWidth,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.timing(catAnim.y, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(catAnim.y, {
        toValue: windowHeight,
        duration: 3000,
        useNativeDriver: false,
      }),
    ).start();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (
        Math.abs(mouseAnim.x._value - catAnim.x._value) < 50 &&
        Math.abs(mouseAnim.y._value - catAnim.y._value) < 50
      ) {
        // Stop the animations
        mouseAnim.x.stopAnimation();
        mouseAnim.y.stopAnimation();
        catAnim.y.stopAnimation();
      }
    }, 100);

    return () => clearInterval(id);
  }, []);

  return (
    <View style={{ flex: 1 }}>
    <Animated.Image
      source={{
        uri: "https://png.pngtree.com/png-clipart/20230825/original/pngtree-cute-little-mouse-cartoon-running-picture-image_8695103.png",
      }}
      style={{
        width: 100,
        height: 100,
        resizeMode: "contain",
        transform: [{ translateX: mouseAnim.x }],
      }}
    />
    <Animated.Image
      source={{
        uri: "https://png.pngtree.com/png-vector/20240314/ourlarge/pngtree-cute-pixie-bob-cat-cartoon-running-png-image_11956853.png",
      }}
      style={{
        width: 100,
        height: 100,
        resizeMode: "contain",
        transform: [{ translateY: catAnim.y }],
      }}
    />
  </View>
  );
};

export default Bai6;