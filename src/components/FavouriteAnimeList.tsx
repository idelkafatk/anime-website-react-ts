import React, { FC } from 'react'
import AnimeList from './AnimeList'
import CustomEmpty from './CustomEmpty'
import IAnimeList from '../types/anime/IAnimeList'
import { useFavouriteAnimeQuery } from '../hooks/useFavouriteAnimeQuery'

const FavouriteAnimeList: FC = () => {
  const emptyText = 'Список пуст'
  const queryKey = ['userAnimeList', 1]

  const { data, isLoading, isError, isFetching } =
    useFavouriteAnimeQuery(queryKey)

  const userAnimeList: IAnimeList = data

  return !isLoading && !isFetching && userAnimeList.data.length !== 0 ? (
    <AnimeList
      animeList={data}
      isLoading={isLoading}
      isError={isError}
      isFetching={isFetching}
      pageable={false}
    />
  ) : (
    <CustomEmpty description={emptyText} loading={isLoading || isFetching} />
  )
}
export default FavouriteAnimeList
