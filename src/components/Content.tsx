import React, { FC } from 'react'
import { Divider, Layout } from 'antd'
import { styled } from 'styled-components'
import AnimeCards from './AnimeCards'
import Sidebar from './Sidebar'

const { Content } = Layout

const StyledContent = styled(Content)`
  background-color: var(--color-bg-1);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StyledDivider = styled(Divider)`
  width: 1px;
  height: 100%;
  background-color: black;
  opacity: 0.1;
  border: 0;
  margin: 0;
`

const WrappedContent: FC = () => {
  return (
    <Layout>
      <StyledContent>
        <Layout>
          <Sidebar />
          <StyledDivider type={'vertical'} />
          <AnimeCards />
        </Layout>
      </StyledContent>
    </Layout>
  )
}

export default WrappedContent
