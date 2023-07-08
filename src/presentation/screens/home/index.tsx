import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import Box from 'src/presentation/components/layout/box'
import Promotion from 'src/presentation/components/promotion'
import { colors } from 'src/presentation/style'

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
`

const HomeScreen = () => {
  return (
    <Container>
      <StatusBar style="auto" />
      <Promotion
        title="20% OFF DURING THE WEEKEND"
        btnLabel="Get Now"
        imgUrl="https://cdn.discordapp.com/attachments/891477812303757314/1127280361848705105/hand-holding-shopping-bags-plain-background_23-2148286215-removebg-preview_122.png"
      />
    </Container>
  )
}

export default HomeScreen
