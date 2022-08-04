import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text,  View, ImageBackground, TextInput, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <ImageBackground source={require('./assets/weather.png')} 
      resizeMode='cover'
      style={styles.image}
      >
        <View>
          <TextInput></TextInput>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  }
});