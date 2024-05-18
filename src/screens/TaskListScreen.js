// src/screens/TaskListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FadeInView from '../components/FadeInView';
import SlideInList from '../components/SlideInList';
import RotateButton from '../components/RotateButton';

const TaskListScreen = () => {
  return (
    <View style={styles.container}>
      <FadeInView style={styles.fadeInView}>
        <Text style={styles.title}>Welcome to Task Manager</Text>
      </FadeInView>
      <SlideInList />
      <RotateButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeInView: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TaskListScreen;
