export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  transition: string;
}

interface IColors {
  white: string;
  black: string;
  eerieBlack: string;
  strongBlack: string;
  shadowBlack: string;
  yellow: string;
  transparentWhite: string;
  darkGray: string;
  nightBlue: string;
  ceanBlue: string;
  hanPurple: string;
  mediumPurple: string;
}

interface IFonts {
  primary: string;
}