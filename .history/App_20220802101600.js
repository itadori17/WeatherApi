import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text,  View, ImageBackground, TextInput, ActivityIndicator } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchDataHandler = useCallback(() => {}, []);

  return (
    <View style={styles.root}>
      <ImageBackground source={require('./assets/weather.png')} 
      resizeMode='cover'
      style={styles.image}
      >
        <View>
          <TextInput placeholder='Enter Name of City' 
          onChangeText={text=>setInput(text)}
          value={input}
          placeholderTextColor={'#0000'}
          style={styles.textInput}
          onSubmitEditing={fetchDataHandler}
          />

        
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
  },
  textInput: {
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    d
  }
});

export default App;