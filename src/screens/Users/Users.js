import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Divider, Text, Card, Title } from 'react-native-paper';
import Api from '../../services/Api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Api.get('/users');
        console.log('Response data:', response.data);
        setUsers(response.data.users || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userContainer} key={item.id}>
              <Text style={styles.userName}>{`First Name: ${item.firstName}`}</Text>
              <Text style={styles.userAge}>{`Idade: ${item.age}`}</Text>
              <Text style={styles.userEmail}>{`E-mail: ${item.email}`}</Text>
              <Text style={styles.userPhone}>{`Telefone: ${item.phone}`}</Text>
              <Divider />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ff6961',
  },
  loadingText: {
    fontSize: 24,
    color: '#0077b6',
  },
  userContainer: {
    marginBottom: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userAge: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#ffff00',
    marginBottom: 5,
  },
  userPhone: {
    fontSize: 14,
    color: '#ffff00',
    marginBottom: 10,
  },
});

export default Users;
