import * as Haptics from 'expo-haptics';

export const showErrorWithVibration = (message: string) => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  console.error(message);
}; 