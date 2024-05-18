// src/components/RotateButton.js
import React, { useRef } from 'react';
import { Animated, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RotateButton = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotate = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
    });
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity onPress={rotate}>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Text style={styles.button}>Rotate Me</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
  },
});

export default RotateButton;
