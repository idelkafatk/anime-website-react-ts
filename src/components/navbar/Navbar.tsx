import React, { FC } from 'react'
import { Button, Layout } from 'antd'
import { styled } from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import SearchContainer from './SearchContainer'

const { Header } = Layout

const StyledHeader = styled(Header)`
  background-color: #191919;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const StyledArrowLeftOutlined = styled(ArrowLeftOutlined)`
  color: #039750;
  font-size: 20px;
  margin-left: -20px;

  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`

const Navbar: FC = () => {
  const homePage = '/'
  const history = useHistory()
  const location = useLocation()
  const isHomePage = location.pathname === homePage

  return (
    <StyledHeader>
      {!isHomePage && (
        <StyledArrowLeftOutlined
          style={{ display: 'flex', justifySelf: 'center' }}
          onClick={() => history.push(homePage)}
        />
      )}
      <SearchContainer />
      <Button type="primary">Primary Btn</Button>
    </StyledHeader>
  )
}

export default Navbar
