import { propOr } from 'ramda'
import * as React from 'react'

import type { Business } from 'src/data/contracts/business'
import type { AxiosHttpClient } from 'src/infra/http/axios-http-client/axios-http-client'

namespace UseProduct {
  export interface Props {
    httpClient: AxiosHttpClient
  }
  export interface Return {
    products: Business.Product[]
    loading: boolean
    refetch: (category?: Business.Category) => Promise<void>
  }
}

const useProduct = (props: UseProduct.Props): UseProduct.Return => {
  const [loading, setLoading] = React.useState(true)
  const [products, setProducts] = React.useState<Business.Product[]>([])

  const loadAllProducts = async () => {
    const products = await props.httpClient.get<Business.Product[]>(
      'https://fakestoreapi.com/products',
    )
    setProducts(propOr([], 'body', products))
  }

  const loadByCategory = async (category: Business.Category) => {
    const encodeCategory = encodeURIComponent(category)
    const products = await props.httpClient.get<Business.Product[]>(
      `https://fakestoreapi.com/products/category/${encodeCategory}`,
    )
    setProducts(propOr([], 'body', products))
  }

  const refetch = async (category?: Business.Category) => {
    setLoading(true)
    if (category) {
      await loadByCategory(category)
    } else {
      await loadAllProducts()
    }
    setLoading(false)
  }

  React.useEffect(() => {
    loadAllProducts().finally(() => {
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    products,
    refetch,
    loading,
  }
}

export default useProduct
