// src/components/SlideInList.js
import React, { useEffect, useRef } from 'react';
import { Animated, FlatList, Text, StyleSheet } from 'react-native';

const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const SlideInList = () => {
  const slideAnim = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
  },
});

export default SlideInList;
