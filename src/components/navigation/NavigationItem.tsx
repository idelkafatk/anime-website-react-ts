import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Space } from 'antd'

interface INavigationItemProps {
  icon: ReactNode
  title: string
  path: string
}

const StyledNavigationItem = styled.div<{ active: string }>`
  display: flex;
  width: 220px;
  height: 40px;
  justify-content: center;
  border-radius: 5px;
  background: transparent;
  margin: 5px 10px 0 10px;
  background: ${({ active }) => active === 'true' && 'black'};

  &:hover {
    background: black;
  }
`

const StyledTitle = styled.span`
  color: white;
`

const NavigationItem: FC<INavigationItemProps> = ({ icon, title, path }) => {
  const location = useLocation()
  const isCurrentPath = location.pathname === path

  return (
    <Link to={path}>
      <StyledNavigationItem active={`${isCurrentPath}`}>
        <Space size={8}>
          {icon}
          <StyledTitle>{title}</StyledTitle>
        </Space>
      </StyledNavigationItem>
    </Link>
  )
}

export default NavigationItem
