import type { Business } from 'src/data/contracts'
import {
  ElectronicIcon,
  JewelIcon,
  MenClothesIcon,
  WomenClothesIcon,
} from '../../icons'

const renderElementBasedOnValue = (value: Business.Category) => {
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
