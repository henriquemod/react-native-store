import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/presentation/style'
import PromotionCarousel from 'src/presentation/components/promotion/carousel'
import Chapter from 'src/presentation/components/chapter'
import Button from 'src/presentation/components/button'
import Typography from 'src/presentation/components/typography'
import CategoryCarousel from 'src/presentation/components/category/carousel'

const Container = styled.View`
  display: flex;
  background-color: ${colors.white};
  justify-content: center;
`

const HomeScreen = () => {
  return (
    <Container>
      <StatusBar style="auto" />
      <Chapter
        title="Hello Fola"
        subtitle="Lets start shopping!"
        style={{
          marginTop: 50,
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
          marginTop: 50,
        }}
      >
        <CategoryCarousel />
      </Chapter>
    </Container>
  )
}

export default HomeScreen
