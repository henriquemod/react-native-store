import type { Colors } from 'src/presentation/style/colors'

export namespace Business {
  export interface Promotion {
    title: string
    btnLabel: string
    imgUrl: string
    color?: Colors
  }
  export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  }
}
