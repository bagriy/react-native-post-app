import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import Post from './Post';
import { THEME } from '../constants/theme';

const PostList = ({ data, onOpen }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noPostsTitle}>Still no post here...</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noPostsTitle: {
    fontFamily: THEME.FONTS.OPEN_REGULAR,
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
  }
});

export default PostList;
