import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { THEME } from '../constants/theme';

const AppHeaderIcon = props => {
  const isAndroid = Platform.OS === 'Android';
  const buttonColor = isAndroid ? THEME.COLORS.WHITE : THEME.COLORS.MAIN;

  return (
    <HeaderButton {...props} iconSize={24} color={buttonColor} IconComponent={Ionicons} />
  );
};

export default AppHeaderIcon;
