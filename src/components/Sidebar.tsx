import React, { FC } from 'react'
import { styled } from 'styled-components'
import '../app/globals/antCustomStyles.less'
import { Layout } from 'antd'
import StyledDivider from './StyledDivider'
import NavigationContainer from './navigation/NavigationContainer'

const { Sider } = Layout

const StyledSider = styled(Sider)`
  background: #232323;
  border-right: 10px black;
  display: flex;
`

const Sidebar: FC = () => {
  return (
    <>
      <StyledSider width={250}>
        <NavigationContainer />
      </StyledSider>
      <StyledDivider type="vertical" />
    </>
  )
}
export default Sidebar
