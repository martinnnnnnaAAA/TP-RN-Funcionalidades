import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import { MaterialIcons } from '@expo/vector-icons';
import { showError } from '../utils/messageHelper';

const ContactsScreen = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
        });
        setContacts(data);
      } else {
        showError('Se necesitan permisos para acceder a los contactos');
      }
    })();
  }, []);

  const renderContact = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>
        {item.firstName} {item.lastName}
      </Text>
      <Text style={styles.contactPhone}>
        {item.phoneNumbers?.[0]?.number}
        {item.isEmergencyContact && 
          <MaterialIcons name="star" size={20} color="gold" />
        }
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
  },
});

export default ContactsScreen; 