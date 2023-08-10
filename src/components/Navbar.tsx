import React, { FC } from 'react'
import { Button, Input, Layout } from 'antd'
import { styled } from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

const { Header } = Layout
const { Search } = Input

const StyledHeader = styled(Header)`
  background-color: #191919;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const StyledSearch = styled(Search)`
  max-width: 300px;
  color: #039750;
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
  const history = useHistory()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <Layout>
      <StyledHeader>
        {!isHomePage && (
          <StyledArrowLeftOutlined onClick={() => history.push('/')} />
        )}
        <StyledSearch placeholder="Введите название аниме" enterButton />
        <Button type="primary">Primary Btn</Button>
      </StyledHeader>
    </Layout>
  )
}

export default Navbar
