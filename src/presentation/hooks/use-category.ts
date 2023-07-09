import * as React from 'react'
import { type Business } from 'src/data/contracts/business'
import type { AxiosHttpClient } from 'src/infra/http/axios-http-client/axios-http-client'

namespace UseCategory {
  export interface Props {
    httpClient: AxiosHttpClient
  }
  export interface Return {
    categories: Business.Category[]
    selected: Business.Category | undefined
    loading: boolean
    selectCategory: (category: Business.Category | undefined) => void
  }
}

const useCategory = (props: UseCategory.Props): UseCategory.Return => {
  const [loading, setLoading] = React.useState(true)
  const [categories, setCategories] = React.useState<Business.Category[]>([])
  const [selected, setSelected] = React.useState<
    Business.Category | undefined
  >()

  const loadCategories = async () => {
    const categories = await props.httpClient.get(
      'https://fakestoreapi.com/products/categories',
    )
    setCategories(categories.body)
  }

  const selectCategory = (category: Business.Category | undefined) => {
    setSelected(category)
  }

  React.useEffect(() => {
    loadCategories().finally(() => {
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    categories,
    selected,
    selectCategory,
    loading,
  }
}

export default useCategory
