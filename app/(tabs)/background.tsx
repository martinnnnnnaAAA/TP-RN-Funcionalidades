import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera } from 'expo-camera';
import { showErrorWithVibration } from '../../utils/errorHandler';

export default function BackgroundScreen() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const takePhoto = async () => {
    // Implementación pendiente
  };

  const pickImage = async () => {
    // Implementación pendiente
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>Tomar Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Elegir de Galería</Text>
        </TouchableOpacity>
      </View>
      {backgroundImage && (
        <Image source={{ uri: backgroundImage }} style={styles.preview} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  preview: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
}); 