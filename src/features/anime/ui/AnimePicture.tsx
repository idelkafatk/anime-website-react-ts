import React, { FC } from 'react'
import { Skeleton } from 'antd'
import { IAnimePicture } from '../../../types/anime/api/IAnimeList'
import { StyledImage } from '../../../shared/ui/styled/'

interface IAnimePictureProps {
  main_picture: IAnimePicture
  title: string
}

export const AnimePicture: FC<IAnimePictureProps> = ({
  title,
  main_picture,
}) => {
  return !main_picture || !main_picture.large || !main_picture.medium ? (
    <Skeleton.Image style={{ width: 220, height: 320, border: 5 }} />
  ) : (
    <StyledImage preview={false} alt={title} src={main_picture.large} />
  )
}
