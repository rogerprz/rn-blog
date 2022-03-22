
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const value = useContext(BlogContext);
    console.log('V:' + value);
    return (
        <View>
        <Text>Index Screen</Text>
        <Text>{value} hgh</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;

    