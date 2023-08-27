import React, { FC } from 'react'
import { styled } from 'styled-components'
import { LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import { TypePagination } from '../../../types/anime/TypePagination'
import { PaginationElement } from '../../../shared/ui/kit'

interface IAnimeListPaginationProps {
  prevCursorType: string
  nextCursorType: string
  handlePageChange?: (type: string) => void
  prevDisabled: boolean
  nextDisabled: boolean
}

const PaginationContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
`

const StyledLeftSquareOutlined = styled(LeftSquareOutlined)`
  color: #039750;
  font-size: 30px;

  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`

const StyledRightSquareOutlined = styled(RightSquareOutlined)`
  color: #039750;
  font-size: 30px;

  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`

export const AnimeListPagination: FC<IAnimeListPaginationProps> = ({
  prevCursorType,
  nextCursorType,
  handlePageChange,
  prevDisabled,
  nextDisabled,
}) => {
  return (
    <PaginationContainer>
      <PaginationElement
        icon={
          <StyledLeftSquareOutlined
            style={{
              cursor: prevCursorType,
            }}
            onClick={() =>
              !prevDisabled &&
              handlePageChange &&
              handlePageChange(TypePagination.PREV)
            }
          />
        }
        disabled={prevDisabled}
      />
      <PaginationElement
        icon={
          <StyledRightSquareOutlined
            style={{
              cursor: nextCursorType,
            }}
            onClick={() =>
              !nextDisabled &&
              handlePageChange &&
              handlePageChange(TypePagination.NEXT)
            }
          />
        }
        disabled={nextDisabled}
      />
    </PaginationContainer>
  )
}
