export type Colors = 'white' | 'orange'
type ColorSchema = { [key in Colors]: string }

const color: ColorSchema = {
  white: '#fff',
  orange: '#F17547',
}

export default color
