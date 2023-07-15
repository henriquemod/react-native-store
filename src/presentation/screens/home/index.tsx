import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from 'components/button'
import CategoryCarousel from 'components/category/carousel'
import CategoryCarouselSkeleton from 'components/category/carousel/skeleton'
import Chapter from 'components/chapter'
import ProductList from 'components/product/list'
import ProductListSkeleton from 'components/product/list/skeleton'
import PromotionCarousel from 'components/promotion/carousel'
import Typography from 'components/typography'
import { useAppContext, useCategory, useProduct } from 'hooks'
import type { Business, Http, Navigation } from 'src/data/contracts'
import type { Storage } from 'src/data/contracts/storage'
import { appSizes, appSpacings } from 'src/presentation/style'
import { Container } from './style'

export namespace NHomeScreen {
  export interface Props extends Navigation.Props {
    httpClient: Http.Client
    storage: Storage.Client
  }
}

const HomeScreen = (props: NHomeScreen.Props) => {
  const { favorite } = useAppContext()
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

  const handlePressProduct = (product: Business.Product) => {
    props.navigation.navigate('Product', { product })
  }

  const handlePressFavorite = (product: Business.Product) => {
    favorite.toggleFavorite(product)
  }

  return (
    <SafeAreaView>
      <Container>
        <StatusBar style="auto" />
        <Chapter
          title="Hello"
          subtitle="Lets start shopping!"
          style={{ marginTop: appSpacings.m }}
        >
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
          <ProductList
            onPress={handlePressProduct}
            onFavoritePress={handlePressFavorite}
            data={products}
          />
        )}
      </Container>
    </SafeAreaView>
  )
}

export default HomeScreen
