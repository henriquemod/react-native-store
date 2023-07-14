export type Colors =
  | 'white'
  | 'orange'
  | 'orangeStrong'
  | 'blue'
  | 'gray'
  | 'grayVeryLight'
  | 'lightGray'
  | 'darkGray'
  | 'black'
  | 'yellow'
  | 'dust'
  | 'rose'
  | 'blueBaby'
type ColorSchema = { [key in Colors]: string }

const color: ColorSchema = {
  black: '#000000',
  white: '#ffffff',
  orange: '#F17547',
  orangeStrong: '#F16A26',
  blue: '#1383F1',
  gray: '#D8D3D3',
  darkGray: '#808080',
  lightGray: '#F2F2F2',
  grayVeryLight: '#D9E0E6',
  yellow: '#FCBF0C',
  dust: '#B0AB7B',
  rose: '#CC6369',
  blueBaby: '#D9E0E6',
}

export default color
