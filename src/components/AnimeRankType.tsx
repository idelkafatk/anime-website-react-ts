import { FC } from 'react'
import { styled } from 'styled-components'
import {
  NavigationItemContainer,
  StyledTitle,
} from './navigation/NavigationItem'

interface IAnimeRankType {
  rankType: string
  title: string
  handleAnimeRankingType: (type: string) => void
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

const AnimeRankType: FC<IAnimeRankType> = ({
  handleAnimeRankingType,
  title,
  rankType,
}) => {
  const isCurrentRankType = title === rankType

  return (
    <NavigationItemContainer onClick={() => handleAnimeRankingType(title)}>
      <StyledNavigationItem active={`${isCurrentRankType}`}>
        <StyledTitle>{title}</StyledTitle>
      </StyledNavigationItem>
    </NavigationItemContainer>
  )
}

export default AnimeRankType
