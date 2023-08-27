import { useQuery } from 'react-query'
import { AnimeService } from '../../../entities/anime'

export const useFavouriteAnimeQuery = (queryKey: (number | string)[]) => {
  return useQuery(queryKey, () => AnimeService.getUserAnimeList(), {
    select: ({ data }) => data,
  })
}
