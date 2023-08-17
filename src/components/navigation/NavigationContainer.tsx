import { styled } from 'styled-components'
import React, { FC } from 'react'
import { NumberOutlined, SearchOutlined } from '@ant-design/icons'
import NavigationItem from './NavigationItem'

const StyledNavigationItems = styled.div`
  background: transparent;
  border: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const NavigationContainer: FC = () => {
  return (
    <StyledNavigationItems>
      <NavigationItem
        icon={<NumberOutlined style={{ color: 'white' }} />}
        title={'Главная'}
        path={'/'}
      />
      <NavigationItem
        icon={<NumberOutlined style={{ color: 'white' }} />}
        title={'Топ 100'}
        path={'/top'}
      />
      <NavigationItem
        icon={<SearchOutlined style={{ color: 'white' }} />}
        title={'Поиск'}
        path={'/search'}
      />
    </StyledNavigationItems>
  )
}

export default NavigationContainer
