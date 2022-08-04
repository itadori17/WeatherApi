import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View, StatusBar, ImageBackground, TextInput, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <ImageBackground source={require('./Images/weather.png')} 
      resizeMode=''
      >

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
