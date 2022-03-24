import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

EditScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({});

export default EditScreen;
