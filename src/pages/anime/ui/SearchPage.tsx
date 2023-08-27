import React, { FC } from 'react'
import { StyledContent } from '../../../shared/ui/styled/'
import { AnimeSearch } from '../../../widgets/anime'

export const SearchPage: FC = () => {
  return (
    <StyledContent>
      <AnimeSearch />
    </StyledContent>
  )
}
