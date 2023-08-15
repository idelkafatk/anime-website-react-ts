import React, { FC } from 'react'
import { Layout } from 'antd'
import { styled } from 'styled-components'
import AnimeCards from './AnimeCards'

const { Content } = Layout

const StyledContent = styled(Content)`
  background-color: var(--color-bg-1);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const WrappedContent: FC = () => {
  return (
    <StyledContent>
      <AnimeCards />
    </StyledContent>
  )
}

export default WrappedContent
