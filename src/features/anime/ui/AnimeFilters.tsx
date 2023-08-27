import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'

const StyledFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IAnimeFiltersProps {
  filters: ReactNode[]
}

export const AnimeFilters: FC<IAnimeFiltersProps> = ({ filters }) => {
  return <StyledFilters>{filters}</StyledFilters>
}
