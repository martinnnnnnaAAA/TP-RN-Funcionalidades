import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { showErrorWithVibration } from '../../utils/errorHandler';

export default function AboutScreen() {
  const [scanning, setScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  const startScanning = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    if (status === 'granted') {
      setScanning(true);
    } else {
      showErrorWithVibration('Se necesitan permisos para usar la cámara');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de la App</Text>
      <TouchableOpacity style={styles.button} onPress={startScanning}>
        <Text style={styles.buttonText}>Escanear otra app</Text>
      </TouchableOpacity>

      <Modal visible={scanning} animationType="slide">
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            style={StyleSheet.absoluteFillObject}
            onBarCodeScanned={(data) => {
              setScannedData(data);
              setScanning(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scannerContainer: {
    flex: 1,
  },
}); 