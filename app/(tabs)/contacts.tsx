import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Contacts from 'expo-contacts';
import { MaterialIcons } from '@expo/vector-icons';
import { showErrorWithVibration } from '../../utils/errorHandler';

export default function ContactsScreen() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status !== 'granted') {
          showErrorWithVibration('Necesitamos permisos para acceder a los contactos');
          return;
        }
        
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
        setContacts(data);
      } catch (error) {
        showErrorWithVibration('Error al cargar los contactos');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactCard}>
            <Text style={styles.name}>{item.name}</Text>
            {item.phoneNumbers && item.phoneNumbers[0] && (
              <Text style={styles.phone}>{item.phoneNumbers[0].number}</Text>
            )}
            {item.isEmergency && (
              <MaterialIcons name="emergency" size={24} color="red" />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contactCard: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    color: '#666',
    marginTop: 5,
  },
}); 