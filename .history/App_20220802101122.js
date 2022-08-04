import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text,  View, ImageBackground, TextInput, ActivityIndicator } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  return (
    <View style={styles.root}>
      <ImageBackground source={require('./assets/weather.png')} 
      resizeMode='cover'
      style={styles.image}
      >
        <View>
          <TextInput placeholder='Enter Name of City' 
          onChangeText={}>

          </TextInput>
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

export default App;