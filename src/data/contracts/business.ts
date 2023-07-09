import type { Colors } from 'src/presentation/style/colors'

export namespace Business {
  export interface Promotion {
    title: string
    btnLabel: string
    imgUrl: string
    color?: Colors
  }
  export interface Product {
    id: string
    image: string
    name: string
    price: number
  }
}
