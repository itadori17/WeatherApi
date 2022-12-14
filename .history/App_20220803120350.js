import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text,  View, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import axios from "axios";

const App = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const api = {
    key: '486a7dceff36934a00e8daaa99a9630e',
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
  };

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput('');
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.dir(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [input, api.key]);
  return (
    <View style={styles.root}>
      <ImageBackground source={require('./assets/weather.png')} 
      resizeMode='cover'
      style={styles.image}
      >
        <View>
          <Text style={styles.label}>weather App</Text>
          <TextInput placeholder='Enter Name of City and Press Return' 
          onChangeText={text=>setInput(text)}
          
          placeholderTextColor={'#000'}
          style={styles.textInput}
          onSubmitEditing={fetchDataHandler}
          value={input}
          />
        </View>
        {loading && (<View>
          <ActivityIndicator size={'large'} color='#000' />
          </View>
          )}

        {data && (
                  <View style={styles.infoView}>
                    <Text
                      style={
                        styles.cityText
                      }>{`${data?.name}, ${data?.sys?.country}`}</Text>
                    <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
                    <Text style={styles.tempText}>{`${Math.round(
                      data?.main?.temp,
                    )} ??C`}</Text>
                    <Text style={styles.minMaxText}>{`Min ${Math.round(
                      data?.main?.temp_min,
                    )} ??C / Max ${Math.round(data?.main?.temp_max)} ??C`}</Text>
                  </View>
                )}
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
  label: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 19,
    borderRadius: 16,
    borderBottomColor: '#df8e00',
  },
  cityText: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },

  infoView: {
    alignItems: 'center',
  },

  dateText: {
    color: '#000',
    fontSize: 22,
    marginVertical: 10,
  },
  tempText: {
    fontSize: 45,
    color: 'blue',
    marginVertical: 10,
  },
  minMaxText: {
    fontSize: 30,
    color: 'blue',
    marginVertical: 10,
    fontWeight: '500',
  },
});

export default App;