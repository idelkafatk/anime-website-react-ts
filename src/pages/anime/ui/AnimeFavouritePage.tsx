import React, { FC } from 'react'
import AnimeFavourite from '../../../widgets/anime/ui/AnimeFavourite'
import { StyledContent } from '../../../shared/ui/styled'

export const AnimeFavouritePage: FC = () => {
  return (
    <StyledContent>
      <AnimeFavourite />
    </StyledContent>
  )
}
