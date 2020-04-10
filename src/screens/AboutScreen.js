import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import AppHeaderIcon from '../components/AppHeaderIcon';
import { THEME } from '../constants/theme';

const AboutScreen = props => {
  return (
    <View style={styles.wrapper}>
      <Text>This is the best app for personal notes</Text>
      <Text>Version <Text style={styles.version}>1.0.0</Text></Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'About',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={navigation.toggleDrawer} />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  version: {
    fontFamily: THEME.FONTS.OPEN_BOLD,
  }
});

export default AboutScreen;
