export interface IAnimeDetails {
  mal_id: number
  title: string
  images: IAnimeImages
  trailer: IAnimeTrailer
  synopsis: string
  genres: IAnimeGenre[]
  score: number
}

export interface IAnimeGenre {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface IAnimeTrailer {
  youtube_id: string
  url: string
  embed_url: string
  images: {
    image_url: string
    small_image_url: string
    medium_image_url: string
    large_image_url: string
    maximum_image_url: string
  }
}

export interface IAnimeImages {
  jpg: {
    image_url: string
    small_image_url: string
    large_image_url: string
  }
}

export interface IAnimeDetailsData {
  data: IAnimeDetails
}
