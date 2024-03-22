import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

const Bai1 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  useEffect(() => {
    {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    }
  },[]);
  return <>
    <Animated.Text style={{ opacity: fadeAnim }}>Fading in</Animated.Text>
    <Animated.Text style={{ opacity: fadeAnim }}>Fading in2</Animated.Text>
  </>;
};

export default Bai1;
