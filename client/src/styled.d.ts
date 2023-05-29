import 'styled-components';
import { ITheme } from './interfaces';

declare module 'styled-components' {
  interface DefaultTheme extends ITheme {}
}