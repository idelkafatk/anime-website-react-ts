import React, { FC } from 'react'
import { Layout } from 'antd'
import { styled } from 'styled-components'
import '../app/globals/antCustomStyles.less'

const { Sider } = Layout

const StyledSider = styled(Sider)`
  background: #232323;
  border-right: 10px black;
`

const Sidebar: FC = () => {
  return <StyledSider width={250} />
}

export default Sidebar
