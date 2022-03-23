import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Show Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
