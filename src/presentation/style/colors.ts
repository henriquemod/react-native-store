export type Colors =
  | 'white'
  | 'orange'
  | 'orangeStrong'
  | 'blue'
  | 'gray'
  | 'lightGray'
  | 'darkGray'
  | 'grayer'
  | 'black'
  | 'yellow'
type ColorSchema = { [key in Colors]: string }

const color: ColorSchema = {
  black: '#000000',
  white: '#ffffff',
  orange: '#F17547',
  orangeStrong: '#F16A26',
  blue: '#1383F1',
  gray: '#D8D3D3',
  darkGray: '#808080',
  grayer: '#808080',
  lightGray: '#F2F2F2',
  yellow: '#FCBF0C',
}

export default color
