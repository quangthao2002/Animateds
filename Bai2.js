import React, { useRef } from "react";
import { Animated, Button, Dimensions, View } from "react-native";

const Bai2 = () => {
  const moveAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const start = () => {
    Animated.timing(moveAnim, {
      toValue: Dimensions.get("window").width - 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const stop = () => {
    moveAnim.stopAnimation(); // Stop the animation
  };
  const restart = () => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginBottom: 10,
          backgroundColor: "red",
          transform: [{ translateX: moveAnim }],
        }}
      ></Animated.View>
      <Button title="Start" onPress={start} />
      <Button title="Stop" onPress={stop} />
      <Button title="Restart" onPress={restart} />
    </View>
  );
};

export default Bai2;
