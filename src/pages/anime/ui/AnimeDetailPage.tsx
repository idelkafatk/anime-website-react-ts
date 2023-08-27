import React, { FC } from 'react'
import { AnimeDetail } from '../../../widgets/anime'
import { StyledContent } from '../../../shared/ui/styled'

export const AnimeDetailPage: FC = () => {
  return (
    <StyledContent>
      <AnimeDetail />
    </StyledContent>
  )
}
