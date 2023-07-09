import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import type { Business } from 'src/data/contracts/business'
import type { AxiosHttpClient } from 'src/infra/http/axios-http-client/axios-http-client'
import Button from 'src/presentation/components/button'
import CategoryCarousel from 'src/presentation/components/category/carousel'
import Chapter from 'src/presentation/components/chapter'
import ProductList from 'src/presentation/components/product/list'
import PromotionCarousel from 'src/presentation/components/promotion/carousel'
import Typography from 'src/presentation/components/typography'
import { useProduct, useCategory } from 'src/presentation/hooks'
import { appColors, appSizes } from 'src/presentation/style'
import CategoryCarouselSkeleton from 'src/presentation/components/category/carousel/skeleton'
import ProductListSkeleton from 'src/presentation/components/product/list/skeleton'

const Container = styled.View`
  display: flex;
  background-color: ${appColors.white};
  justify-content: center;
  height: 100%;
`

export namespace NHomeScreen {
  export interface Props {
    httpClient: AxiosHttpClient
  }
}

const HomeScreen = (props: NHomeScreen.Props) => {
  const { products, refetch, loading: productLoading } = useProduct(props)
  const {
    categories,
    selectCategory,
    loading: categoryLoading,
    selected: selectedCategory,
  } = useCategory(props)

  React.useEffect(() => {
    refetch(selectedCategory)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory])

  const handleSelectCategory = (category: Business.Category) => {
    const select = category === selectedCategory ? undefined : category
    selectCategory(select)
  }

  return (
    <SafeAreaView>
      <Container>
        <StatusBar style="auto" />
        <Chapter title="Hello Fola" subtitle="Lets start shopping!">
          <PromotionCarousel />
        </Chapter>
        <Chapter
          title="Top Categories"
          endornment={
            <Button>
              <Typography color="orange" size="xs" dark>
                See All
              </Typography>
            </Button>
          }
          style={{
            marginTop: appSizes.sizeRaw.xxxs,
          }}
        >
          {categoryLoading ? (
            <CategoryCarouselSkeleton />
          ) : (
            <CategoryCarousel
              selectedCategory={selectedCategory}
              categories={categories}
              handleSelectCategory={handleSelectCategory}
            />
          )}
        </Chapter>
        {productLoading ? (
          <ProductListSkeleton />
        ) : (
          <ProductList data={products} />
        )}
      </Container>
    </SafeAreaView>
  )
}

export default HomeScreen
