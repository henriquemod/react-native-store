import {
  ElectronicIcon,
  JewelIcon,
  MenClothesIcon,
  WomenClothesIcon,
} from '../../icons'

export type IconItem =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing"

const renderElementBasedOnValue = (value: IconItem) => {
  switch (value) {
    case 'electronics':
      return ElectronicIcon
    case 'jewelery':
      return JewelIcon
    case "men's clothing":
      return MenClothesIcon
    case "women's clothing":
      return WomenClothesIcon
    default:
      return null
  }
}

export default renderElementBasedOnValue
