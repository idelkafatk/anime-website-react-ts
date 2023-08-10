import axios from 'axios'
import { apiToken } from '../../animeToken'

const CORS_ANYWHERE_URL = 'http://localhost:8080/' // Адрес сервера CORS Anywhere
const API_URL_MAL = 'api.myanimelist.net/v2'
const API_URL_UMAL = 'https://api.jikan.moe/v4' // unofficial mal

const mal = axios.create({
  baseURL: CORS_ANYWHERE_URL + API_URL_MAL,
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
})

const unOfficialMal = axios.create({
  baseURL: CORS_ANYWHERE_URL + API_URL_UMAL,
})

export const AnimeService = {
  async getAll(searchQuery: string, limit: number) {
    return mal.get('/anime', {
      params: {
        q: searchQuery,
        limit,
      },
    })
  },

  async getAnimeDetail(animeId: number) {
    return unOfficialMal.get(`/anime/${animeId}/full`)
  },
}
