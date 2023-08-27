import { FC } from 'react'
import { styled } from 'styled-components'
import { Empty, Spin } from 'antd'

interface IEmpty {
  description: string
  loading: boolean
}

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #232323;
`

export const CustomEmpty: FC<IEmpty> = ({ description, loading }) => {
  return (
    <EmptyContainer>
      {loading ? (
        <Spin />
      ) : (
        <Empty
          description={<span style={{ color: 'white' }}>{description}</span>}
        />
      )}
    </EmptyContainer>
  )
}
