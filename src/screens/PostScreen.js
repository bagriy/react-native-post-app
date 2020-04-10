import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Image, Button, ScrollView, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import { dateConverter } from '../helpers/dateConverter';
import { THEME } from '../constants/theme';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { removePost, toggleBooked } from '../store/actions/post';

const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const postId = navigation.getParam('postId');
  const currentPost = useSelector(state => state.post.allPosts.find(post => post.id === postId));

  const removeHandler = () => {
    Alert.alert(
      'Deleting post',
      'Are you sure you want to delete post?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            navigation.navigate('Main');
            dispatch(removePost(postId));
          },
        }
      ],
    );
  };

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(currentPost));
  }, [dispatch, currentPost]);

  const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId));

  useEffect(() => {
    navigation.setParams({
      toggleHandler
    });
  }, [toggleHandler]);

  useEffect(() => {
    navigation.setParams({
      booked: booked,
    });
  }, [booked]);

  if (!currentPost) {
    return null;
  }

  return (
    <ScrollView>
      <Image source={{ uri: currentPost.img }} style={styles.image}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{currentPost.text}</Text>
      </View>
      <Button title="Delete" color={THEME.COLORS.DANGER} onPress={removeHandler} />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date');
  const booked = navigation.getParam('booked');
  const toggleHandler = navigation.getParam('toggleHandler');
  const iconName = booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: `Post from ${dateConverter(date)}`,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler}/>
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: THEME.FONTS.OPEN_REGULAR,
  },
});

export default PostScreen;
