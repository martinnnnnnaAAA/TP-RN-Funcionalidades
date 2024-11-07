import { Alert } from 'react-native';
import * as Haptics from 'expo-haptics';

export const showErrorWithVibration = async (message: string) => {
  await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  Alert.alert('Error', message);
}; 