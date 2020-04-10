import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import AppHeaderIcon from '../components/AppHeaderIcon';
import PhotoPicker from '../components/PhotoPicker';
import { addPost } from '../store/actions/post';
import { THEME } from '../constants/theme';

const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const imgRef = useRef();

  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: imgRef.current,
      booked: false,
    };

    dispatch(addPost(post));
    navigation.navigate('Main');
  };

  const photoPickHandler = uri => {
    imgRef.current = uri;
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create New Post</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Enter post description"
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler}/>
          <Button
            title="Create post"
            color={THEME.COLORS.MAIN}
            onPress={createPostHandler}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Create post',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={navigation.toggleDrawer} />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: THEME.FONTS.OPEN_REGULAR,
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  }
});

export default CreateScreen;
