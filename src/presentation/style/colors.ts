export type Colors =
  | 'white'
  | 'orange'
  | 'blue'
  | 'gray'
  | 'lightGray'
  | 'darkGray'
  | 'black'
type ColorSchema = { [key in Colors]: string }

const color: ColorSchema = {
  black: '#000000',
  white: '#ffffff',
  orange: '#F17547',
  blue: '#1383F1',
  gray: '#D8D3D3',
  darkGray: '#808080',
  lightGray: '#F2F2F2',
}

export default color
