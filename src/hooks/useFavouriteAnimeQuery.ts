import { useQuery } from 'react-query'
import { AnimeService } from '../services/anime/animeApiService'

export const useFavouriteAnimeQuery = (queryKey: (number | string)[]) => {
  return useQuery(queryKey, () => AnimeService.getUserAnimeList(), {
    select: ({ data }) => data,
  })
}
