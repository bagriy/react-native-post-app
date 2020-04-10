import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

import { THEME } from '../constants/theme';
import { dateConverter } from '../helpers/dateConverter';

const Post = ({ post, onOpen }) => {
  const dateToRender = dateConverter(post.date);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{dateToRender}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.OPEN_REGULAR,
  },
});

export default Post;
