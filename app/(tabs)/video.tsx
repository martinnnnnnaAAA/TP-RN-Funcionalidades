import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Video } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showErrorWithVibration } from '../../utils/errorHandler';

export default function VideoScreen() {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    loadSavedUrl();
  }, []);

  const loadSavedUrl = async () => {
    try {
      const savedUrl = await AsyncStorage.getItem('videoUrl');
      if (savedUrl) setVideoUrl(savedUrl);
    } catch (error) {
      showErrorWithVibration('Error al cargar el URL guardado');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={videoUrl}
        onChangeText={setVideoUrl}
        placeholder="Ingresa la URL del video"
      />
      {videoUrl && (
        <Video
          source={{ uri: videoUrl }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          shouldPlay
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 300,
  },
}); 