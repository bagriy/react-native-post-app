import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import AboutScreen from '../screens/AboutScreen';
import CreateScreen from '../screens/CreateScreen';
import { THEME } from '../constants/theme';

const isAndroid = Platform.OS === 'android';

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: isAndroid ? THEME.COLORS.MAIN : THEME.COLORS.WHITE,
    },
    headerTintColor: isAndroid ? THEME.COLORS.WHITE : THEME.COLORS.MAIN,
  }
};

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: PostScreen,
  },
  navigatorOptions,
);

const BookedNavigator = createStackNavigator({
    Booked: BookmarkScreen,
    Post: PostScreen,
  },
  navigatorOptions,
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'All',
      tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor} />,
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor} />,
    }
  }
};

const BottomNavigator = isAndroid ?
  createMaterialTopTabNavigator(
    bottomTabsConfig,
    {
      activeTintColor: THEME.COLORS.WHITE,
      shifting: true,
      barStyle: {
        backgroundColor: THEME.COLORS.MAIN,
      }
    }
  ):
  createBottomTabNavigator(
  bottomTabsConfig,
  {
    tabBarOptions: {
      activeTintColor: THEME.COLORS.MAIN,
    }
  });

const AboutScreenNavigator = createStackNavigator({
  About: AboutScreen,
}, navigatorOptions);

const CreateScreenNavigator = createStackNavigator({
  Create: CreateScreen,
}, navigatorOptions);

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator,
    navigationOptions: {
      drawerLabel: 'Main',
    }
  },
  About: {
    screen: AboutScreenNavigator,
  },
  Create: {
    screen: CreateScreenNavigator,
    navigationOptions: {
      drawerLabel: 'New Post',
    }
  },
}, {
  contentOptions: {
    activeTintColor: THEME.COLORS.MAIN,
    labelStyle: {
      fontFamily: THEME.FONTS.OPEN_BOLD,
    }
  }
});

export const AppNavigation = createAppContainer(MainNavigator);
