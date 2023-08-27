import React, { FC, JSX, ReactNode } from 'react'
import { Alert } from 'antd'
import { styled } from 'styled-components'
import IAnimeList, { IAnimeItem } from '../../../types/anime/api/IAnimeList'
import { TransitionGroup } from 'react-transition-group'
import { useTypedSelector } from '../../../shared/lib'
import {
  AnimeCard,
  AnimeCardSkeleton,
  AnimeListPagination,
} from '../../../features/anime'

interface IAnimeListProps {
  animeList?: IAnimeList
  isLoading?: boolean
  isError?: boolean
  isFetching?: boolean
  handlePageChange?: (type: string) => void
  rank?: number
  pageable: boolean
  filters?: ReactNode
}

const StyledContainer = styled.div<{
  isfilters: string
}>`
  display: flex;
  height: calc(100vh - 60px);
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${({ isfilters }) => (isfilters === 'true' ? '10px' : '50px')};
  padding-bottom: 30px;
  background-color: #232323;
  overflow-y: auto;
  gap: 20px;
`

const StyledAnimeList = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const AnimeList: FC<IAnimeListProps> = ({
  animeList,
  isLoading,
  isError,
  isFetching,
  handlePageChange,
  pageable,
  filters,
}) => {
  const { limit } = useTypedSelector((state) => state.offset)
  const prevCursorType =
    animeList?.paging.previous === undefined ? 'not-allowed' : 'pointer'
  const nextCursorType =
    animeList?.paging.next === undefined ? 'not-allowed' : 'pointer'

  if (isError) {
    return (
      <Alert
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
        }}
        message="Ошибка загрузки"
        type="error"
      />
    )
  }

  const renderAnimeCards = (): JSX.Element => {
    return (
      <StyledAnimeList>
        <TransitionGroup component={null}>
          {!animeList
            ? Array.from({ length: limit }).map((_, i) => {
                return <AnimeCardSkeleton key={i} />
              })
            : animeList.data.map((animeItem: IAnimeItem, index: number) => (
                <AnimeCard animeItem={animeItem} key={index} />
              ))}
        </TransitionGroup>
      </StyledAnimeList>
    )
  }

  const renderAnimeListPagination = (): JSX.Element => {
    return (
      <AnimeListPagination
        prevCursorType={prevCursorType}
        nextCursorType={nextCursorType}
        handlePageChange={handlePageChange}
        prevDisabled={
          isLoading || isFetching || animeList?.paging.previous === undefined
        }
        nextDisabled={
          isLoading || isFetching || animeList?.paging.next === undefined
        }
      />
    )
  }

  const renderedAnimeList = renderAnimeCards()
  const pagination = pageable && renderAnimeListPagination()

  return (
    <StyledContainer isfilters={filters ? 'true' : 'false'}>
      {filters && filters}
      {renderedAnimeList}
      {pagination}
    </StyledContainer>
  )
}
