import { styled } from 'styled-components'
import { Card } from 'antd'
import { StyledImage } from './StyledImage'
import { StyledMeta } from './StyledMeta'

export const StyledCard = styled(Card)`
  width: 220px;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    ${StyledImage} {
      opacity: 0.8;
      transition: 0.3s;
    }

    ${StyledMeta} {
      opacity: 0.8;
      transition: 0.3s;
    }
  }
`
