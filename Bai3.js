import React, { useEffect, useRef } from "react";
import { Animated, View, Text, Image, TextInput, Button } from "react-native";

const Bai3 = () => {
  const bellAnim = useRef(new Animated.Value(0)).current;
  const circleAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;
  const inputAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bellAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bellAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(circleAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(circleAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(textAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();

}, []);
const show = () => {
  Animated.timing(inputAnim, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: false,
  }).start();
};
const hide = () => {
    Animated.timing(inputAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
    }).start();
}

  return (
    <View style={{ flexDirection: "column" }}>
      <Animated.Image
        source={{
          uri: "https://banner2.cleanpng.com/20171127/bc6/golden-bell-png-clip-art-image-5a1bb1f697aa91.5158337215117644706212.jpg",
        }}
        style={{
          width: 100,
          height: 100,
          flexDirection: "row",
          justifyContent: "flex-end",
          transform: [
            {
              rotate: bellAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["-30deg", "30deg"],
              }),
            },
          ],
        }}
      />
      <Animated.Image
        style={{
          width: 100,
          height: 100,
          transform: [
            {
              rotate: circleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
        source={{
          uri: "https://png.pngtree.com/png-vector/20220811/ourmid/pngtree-yin-yang-and-ba-gua--8-trigrams-png-image_5845994.png",
        }}
      />
      <Animated.Text
        style={{
          color: textAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["green", "red"],
          }),
        }}
      >
        Hello
      </Animated.Text>

      <Animated.View style={{ opacity: inputAnim }}>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" secureTextEntry />
      </Animated.View>

      <Button title="Show" onPress={show} />
        <Button title="Hide" onPress={hide} />
    </View>
  );
};

export default Bai3;
