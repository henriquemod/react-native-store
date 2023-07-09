import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/presentation/style'
import PromotionCarousel from 'src/presentation/components/promotion/carousel'
import Chapter from 'src/presentation/components/chapter'
import Button from 'src/presentation/components/button'
import Typography from 'src/presentation/components/typography'
import CategoryCarousel from 'src/presentation/components/category/carousel'
import ProductList from 'src/presentation/components/product/list'
import type { AxiosHttpClient } from 'src/infra/http/axios-http-client/axios-http-client'
import { type Business } from 'src/data/contracts/business'

const Container = styled.View`
  display: flex;
  background-color: ${colors.white};
  justify-content: center;
`

export namespace NHomeScreen {
  export interface Props {
    axiosClient: AxiosHttpClient
  }
}

const HomeScreen = (props: NHomeScreen.Props) => {
  const [data, setData] = React.useState<Business.Product[]>([])

  React.useEffect(() => {
    props.axiosClient.get('https://fakestoreapi.com/products', {}).then(res => {
      console.log(res.body)
      setData(res.body)
    })
  }, [])

  return (
    <Container>
      <StatusBar style="auto" />
      <Chapter
        title="Hello Fola"
        subtitle="Lets start shopping!"
        style={{
          marginTop: 20,
        }}
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
          marginTop: 10,
        }}
      >
        <CategoryCarousel />
      </Chapter>
      <ProductList data={data} />
    </Container>
  )
}

export default HomeScreen
