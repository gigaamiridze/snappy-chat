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
  hanPurple: string;
  mediumPurple: string;
}

interface IFonts {
  primary: string;
}