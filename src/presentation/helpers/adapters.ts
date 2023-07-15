import { type Business } from 'src/data/contracts'
import uuid from 'react-native-uuid'

export const adaptProductIntoOrderItem = (
  product: Business.Product,
): Business.Order => {
  return {
    id: uuid.v4().toString(),
    quantity: 1,
    product,
  }
}
