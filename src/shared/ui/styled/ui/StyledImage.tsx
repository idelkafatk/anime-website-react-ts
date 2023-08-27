import { keyframes, styled } from 'styled-components'
import { Image } from 'antd'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const StyledImage = styled(Image)`
  height: 320px;
  width: 220px;
  object-fit: cover;
  animation: ${fadeIn} 500ms ease-in;

  &.item-exit {
    animation: ${fadeOut} 500ms ease-in;
  }
`
