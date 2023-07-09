import * as React from 'react'
import { propOr } from 'ramda'

import type { Business, Http, Storage } from 'src/data/contracts'

namespace UseProduct {
  export interface Props {
    httpClient: Http.Client
    storage: Storage.Client
  }

  export interface Return {
    products: Business.Product[]
    loading: boolean
    refetch: (category?: Business.Category) => Promise<void>
  }
}

const useProduct = ({
  httpClient,
  storage,
}: UseProduct.Props): UseProduct.Return => {
  const [loading, setLoading] = React.useState(true)
  const [products, setProducts] = React.useState<Business.Product[]>([])

  const loadProducts = async (category?: Business.Category) => {
    const key = category
      ? `category.${encodeURIComponent(category)}`
      : 'products'
    const dataFromStorage = await storage.get(key)

    if (dataFromStorage) {
      setProducts(JSON.parse(dataFromStorage))
    } else {
      let url = 'https://fakestoreapi.com/products'

      if (category) {
        url += `/category/${encodeURIComponent(category)}`
      }

      const response = await httpClient.get<Business.Product[]>(url)
      const body = propOr([], 'body', response)
      await storage.set(key, JSON.stringify(body))

      setProducts(body as Business.Product[])
    }
  }

  const refetch = async (category?: Business.Category) => {
    setLoading(true)
    await loadProducts(category)
    setLoading(false)
  }

  React.useEffect(() => {
    loadProducts().finally(() => {
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
