import { FC } from 'react'
import { styled } from 'styled-components'
import {
  NavigationItemContainer,
  StyledTitle,
} from '../../../shared/ui/navigation/ui/NavigationItem'
import { TypeAnimeRank } from '../../../types/anime/TypeAnimeRank'

interface IAnimeRankType {
  currentRankType: TypeAnimeRank
  rankType: TypeAnimeRank
  title: string
  handleAnimeRankingType: (type: TypeAnimeRank) => void
}

const StyledNavigationItem = styled.div<{
  active: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  margin: 0 10px;
  background: transparent;
  cursor: pointer;
  background: ${({ active }) => active === 'true' && '#039750'};

  &:hover {
    background: #039750;
  }
`

export const AnimeRankType: FC<IAnimeRankType> = ({
  handleAnimeRankingType,
  title,
  currentRankType,
  rankType,
}) => {
  const isCurrentRankType = rankType === currentRankType

  return (
    <NavigationItemContainer onClick={() => handleAnimeRankingType(rankType)}>
      <StyledNavigationItem active={`${isCurrentRankType}`}>
        <StyledTitle>{title}</StyledTitle>
      </StyledNavigationItem>
    </NavigationItemContainer>
  )
}
