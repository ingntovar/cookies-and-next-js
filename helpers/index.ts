import { Theme } from '@mui/material';
import { lightTheme } from '../themes/light-theme';
import { darkTheme } from '../themes/dark-theme';
import { customTheme } from '../themes/custom-theme';


export const themesApp : { [key: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme
}