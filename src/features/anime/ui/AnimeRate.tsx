import { FC } from 'react'
import { CustomRate } from '../../../shared/ui/kit'
import { styled } from 'styled-components'

interface IAnimeRateProps {
  rate: number
}

const RateContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px 0 50px;
`

export const AnimeRate: FC<IAnimeRateProps> = ({ rate }) => {
  return (
    <RateContainer>
      <CustomRate rate={rate} />
    </RateContainer>
  )
}
