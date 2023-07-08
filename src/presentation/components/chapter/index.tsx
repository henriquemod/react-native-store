import * as React from 'react'
import { View, type ViewProps } from 'react-native'

import Typography from '../typography'
import { Container, HeaderContainer, LabelsContainer } from './style'

export namespace NChapter {
  export interface Props extends ViewProps {
    title: string
    subtitle?: string
    endornment?: React.ReactNode
  }
}

const Chapter = (props: NChapter.Props) => {
  const { children, ...rest } = props
  return (
    <Container {...rest}>
      <HeaderContainer>
        <LabelsContainer>
          <Typography color="black" strong>
            {props.title}
          </Typography>
          {props.subtitle && (
            <Typography color="gray" size="xs">
              {props.subtitle}
            </Typography>
          )}
        </LabelsContainer>
        {props.endornment && <View>{props.endornment}</View>}
      </HeaderContainer>
      {children}
    </Container>
  )
}

export default Chapter
