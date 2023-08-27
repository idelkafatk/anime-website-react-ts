import React, { FC } from 'react'
import { styled } from 'styled-components'
import '../../../../app/styles/antCustomStyles.less'
import { Layout } from 'antd'
import { NavigationContainer } from '../index'
import { StyledDivider } from '../../styled'

const { Sider } = Layout

const StyledSider = styled(Sider)`
  background: #232323;
  border-right: 10px black;
  display: flex;
`

export const Sidebar: FC = () => {
  return (
    <>
      <StyledSider width={250}>
        <NavigationContainer />
      </StyledSider>
      <StyledDivider type="vertical" />
    </>
  )
}
