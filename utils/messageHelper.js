import { Alert, Vibration } from 'react-native';

export const showError = (message) => {
  Vibration.vibrate();
  Alert.alert(
    'Error',
    message,
    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    { cancelable: false }
  );
}; 