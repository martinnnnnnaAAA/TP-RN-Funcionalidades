import { StyleSheet, View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Contactos',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="contacts" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="background"
        options={{
          title: 'Fondo',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="image" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-library" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 