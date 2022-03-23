import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={() => addBlogPost('Title', 'Content')} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.content}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
