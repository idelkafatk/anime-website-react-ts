import { styled } from 'styled-components'
import React, { FC } from 'react'
import { NumberOutlined } from '@ant-design/icons'
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
        title={'Топ 100'}
        path={'/'}
      />
      <NavigationItem
        icon={<NumberOutlined style={{ color: 'white' }} />}
        title={'Аниме 21'}
        path={'/anime/21'}
      />
    </StyledNavigationItems>
  )
}

export default NavigationContainer
