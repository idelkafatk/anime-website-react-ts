import { styled } from 'styled-components'
import React, { FC } from 'react'
import {
  HeartOutlined,
  NumberOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { NavigationItem } from './NavigationItem'

const StyledNavigationItems = styled.div`
  background: transparent;
  border: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const NavigationContainer: FC = () => {
  return (
    <StyledNavigationItems>
      <NavigationItem
        icon={<NumberOutlined style={{ color: 'white' }} />}
        title={'Топ 100'}
        path={'/top'}
      />
      <NavigationItem
        icon={<SearchOutlined style={{ color: 'white' }} />}
        title={'Поиск'}
        path={'/'}
      />
      <NavigationItem
        icon={<HeartOutlined style={{ color: 'white' }} />}
        title={'Избранное'}
        path={'/favourite'}
      />
    </StyledNavigationItems>
  )
}
