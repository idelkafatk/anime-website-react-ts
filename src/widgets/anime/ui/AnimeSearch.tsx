import React, { FC } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../../shared/lib'
import { useQuery } from 'react-query'
import { AnimeService } from '../../../entities/anime'
import { updateCurrentOffset } from '../../../features/anime'
import { AnimeList } from '../index'
import { CustomEmpty } from '../../../shared/ui/kit'

export const AnimeSearch: FC = () => {
  const { query } = useTypedSelector((state) => state.searchQuery)
  const { currentOffset, limit } = useTypedSelector((state) => state.offset)
  const dispatch = useTypedDispatch()
  const emptyText = 'Введите данные для поиска...'
  const {
    data: response,
    isLoading,
    isFetching,
  } = useQuery<any>(
    [query, currentOffset + limit],
    () => {
      if (query === '') {
        // Возвращаем заглушку с пустым результатом
        return Promise.resolve({ data: [] })
      }
      return AnimeService.getAll(currentOffset, query, limit)
    },
    {
      select: ({ data }) => data,
      staleTime: 60000,
    },
  )

  const handlePageChange = async (type: string) => {
    type === 'prev'
      ? dispatch(updateCurrentOffset(currentOffset - limit))
      : dispatch(updateCurrentOffset(currentOffset + limit))
  }

  return query === '' || isLoading || isFetching ? (
    <CustomEmpty description={emptyText} loading={isLoading || isFetching} />
  ) : (
    <AnimeList
      animeList={response}
      handlePageChange={handlePageChange}
      pageable={true}
    />
  )
}
