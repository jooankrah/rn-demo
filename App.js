import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome name="chevron-left" size={24} color="black" />
        <Text style={styles.title}>Sign In</Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold'
  }
});
