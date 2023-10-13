import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import Api from '../../services/Api';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await Api.get('/posts');
        console.log('Response data:', response.data);
        setPosts(response.data.posts || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer} key={item.id}>
              <Text style={styles.postTitle}>{`Title: ${item.title}`}</Text>
              <Text style={styles.postBody}>{`Body: ${item.body}`}</Text>
              <Text style={styles.postTags}>{`Tags: ${item.tags}`}</Text>
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
  postContainer: {
    marginBottom: 15,
  },
  postTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 5,
  },
  postBody: {
    fontSize: 16, 
    color: '#555',
    marginBottom: 5,
  },
  postTags: {
    fontSize: 14,
    color: '#ffff00',
    marginBottom: 10,
  },
});

export default Posts;
