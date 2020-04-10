import * as Font from 'expo-font';

import { DB } from '../db';
import { THEME } from '../constants/theme';

export const bootstrap = async () => {
  try {
    await Font.loadAsync({
      [THEME.FONTS.OPEN_BOLD]: require('../../assets/fonts/OpenSans-Bold.ttf'),
      [THEME.FONTS.OPEN_REGULAR]: require('../../assets/fonts/OpenSans-Regular.ttf'),
    });
    await DB.init()
    console.log('Started');
  } catch (error) {
    console.log(error);
  }
};
