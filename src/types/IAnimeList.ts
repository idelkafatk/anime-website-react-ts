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
}

export default interface IAnimeList {
  data: IAnimeItem[]
  paging: {
    next: string | null
  }
}
