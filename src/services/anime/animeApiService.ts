import axios from 'axios'
import { apiToken } from '../../animeToken'

const CORS_ANYWHERE_URL = 'http://localhost:8080/' // Адрес сервера CORS Anywhere
const API_URL_MAL = 'https://api.myanimelist.net/v2'
const API_URL_UMAL = 'https://api.jikan.moe/v4' // unofficial mal

const mal = axios.create({
  baseURL: CORS_ANYWHERE_URL + API_URL_MAL,
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
})

const unOfficialMal = axios.create({
  baseURL: API_URL_UMAL,
})

export const AnimeService = {
  async getAll(offset: number, searchQuery: string, limit: number) {
    return mal.get('/anime', {
      params: {
        offset,
        q: searchQuery,
        limit,
      },
    })
  },

  async getAnimeDetail(animeId: number) {
    return unOfficialMal.get(`/anime/${animeId}/full`)
  },

  async getTop(ranking_type: string, limit: number) {
    return mal.get('/anime/ranking', {
      params: {
        ranking_type,
        limit,
      },
    })
  },

  async getUserAnimeList(user = '@me') {
    return mal.get(`/users/${user}/animelist`)
  },

  async addFavouriteAnimeItem(animeId: number) {
    return mal.patch(`/anime/${animeId}/my_list_status`)
  },

  async deleteFavouriteAnimeItem(animeId: number) {
    return mal.delete(`/anime/${animeId}/my_list_status`)
  },
}
