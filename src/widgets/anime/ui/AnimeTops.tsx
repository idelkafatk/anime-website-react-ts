import React, { FC, useState } from 'react'
import { useQuery } from 'react-query'
import { AnimeService } from '../../../entities/anime/'
import { Alert } from 'antd'
import { TypeAnimeRank } from '../../../types/anime/TypeAnimeRank'
import { AnimeList } from '../index'
import { AnimeFilters, AnimeRankType } from '../../../features/anime'

const AnimeTops: FC = () => {
  const limit = 100
  const [currentRankType, setCurrentRankType] = useState(TypeAnimeRank.ALL)

  const handleAnimeRankingType = (type: TypeAnimeRank) => {
    console.log(type)
    setCurrentRankType(type)
  }

  const rankingTypes = Object.values(TypeAnimeRank).map((type, i) => {
    return (
      <AnimeRankType
        key={i}
        currentRankType={currentRankType}
        rankType={type}
        handleAnimeRankingType={handleAnimeRankingType}
        title={type}
      />
    )
  })

  const {
    data: response,
    isLoading,
    isError,
    isFetching,
  } = useQuery(
    [currentRankType, limit],
    () => AnimeService.getTop(currentRankType, limit),
    {
      select: ({ data }) => data,
      staleTime: 60000,
    },
  )

  if (isError) {
    return <Alert message="Ошибка загрузки" type="error" />
  }

  return (
    <AnimeList
      filters={<AnimeFilters filters={rankingTypes} />}
      animeList={response}
      isLoading={isLoading}
      isError={isError}
      isFetching={isFetching}
      pageable={false}
    />
  )
}

export default AnimeTops
