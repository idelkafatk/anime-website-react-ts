import React, { FC, useState } from 'react'
import { useQuery } from 'react-query'
import { AnimeService } from '../services/anime/animeApiService'
import { Alert } from 'antd'
import AnimeList from './AnimeList'
import AnimeRankType from './AnimeRankType'

const AnimeTops: FC = () => {
  const limit = 100
  const filters = ['all', 'airing', 'upcoming', 'bypopularity']
  const [rankType, setRankType] = useState(filters[0])

  const handleAnimeRankingType = (type: string) => {
    setRankType(type)
  }

  const rankingType = filters.map((filter, i) => {
    return (
      <AnimeRankType
        key={i}
        rankType={rankType}
        handleAnimeRankingType={handleAnimeRankingType}
        title={filter}
      />
    )
  })

  const {
    data: response,
    isLoading,
    isError,
    isFetching,
  } = useQuery([rankType, limit], () => AnimeService.getTop(rankType, limit), {
    select: ({ data }) => data,
    staleTime: 60000,
  })

  if (isError) {
    return <Alert message="Ошибка загрузки" type="error" />
  }

  return (
    <AnimeList
      filters={rankingType}
      animeList={response}
      isLoading={isLoading}
      isError={isError}
      isFetching={isFetching}
      pageable={false}
    />
  )
}

export default AnimeTops
