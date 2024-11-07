import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// Importamos las pantallas
const ContactsScreen = () => (
  <View style={styles.screen}>
    <Text>Pantalla de Contactos</Text>
  </View>
);

const BackgroundScreen = () => (
  <View style={styles.screen}>
    <Text>Pantalla de Fondo</Text>
  </View>
);

const VideoScreen = () => (
  <View style={styles.screen}>
    <Text>Pantalla de Video</Text>
  </View>
);

const AboutScreen = () => (
  <View style={styles.screen}>
    <Text>Pantalla About</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Contacts" 
          component={ContactsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="contacts" size={size} color={color} />
            ),
            title: 'Contactos'
          }}
        />
        <Tab.Screen 
          name="Background" 
          component={BackgroundScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="image" size={size} color={color} />
            ),
            title: 'Fondo'
          }}
        />
        <Tab.Screen 
          name="Video" 
          component={VideoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="video-library" size={size} color={color} />
            ),
            title: 'Video'
          }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="info" size={size} color={color} />
            ),
            title: 'Acerca de'
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
}); 