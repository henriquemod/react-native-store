import * as React from 'react'

import { FilledStar, HalfStar, ShallowStar } from 'components/icons'
import { Container } from './style'

export namespace NScore {
  export interface Props {
    score: number
  }
}

const Score = (props: NScore.Props) => {
  const { score } = props
  const scoreInt = Math.floor(score)
  const scoreDecimal = score - scoreInt

  const scoreList = Array.from({ length: scoreInt }, (_, i) => (
    <FilledStar key={i} />
  ))

  if (scoreDecimal >= 0.5) {
    scoreList.push(<HalfStar key={scoreInt} />)
  } else if (scoreDecimal > 0) {
    scoreList.push(<ShallowStar key={scoreInt} />)
  }

  for (let i = scoreList.length; i < 5; i++) {
    scoreList.push(<ShallowStar key={i} />)
  }

  return <Container>{scoreList}</Container>
}

export default Score
