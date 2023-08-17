export interface IAnimePicture {
  medium: string
  large: string
}

export interface IAnimeItem {
  node: {
    id: number
    title: string
    main_picture: IAnimePicture
  }
  ranking: {
    rank: number
  }
}

export default interface IAnimeList {
  data: IAnimeItem[]
  paging: {
    previous?: string
    next?: string
  }
}
