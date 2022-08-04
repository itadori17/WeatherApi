import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View, ImageBackground, TextInput, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <ImageBackground source={require('./assets/weather')} 
      resizeMode='cover'
      style={styles.image}
      />
        
     

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
