import { FC } from 'react'
import { useQuery } from 'react-query'
import { AnimeService } from '../services/anime/animeApiService'
import { useParams } from 'react-router-dom'
import { IParams } from '../types/IParams'
import { Layout, Skeleton } from 'antd'
import { IAnimeDetailsData } from '../types/IAnimeDetails'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { StyledDivContainer, StyledImage } from './AnimeCards'

const AnimeDetail: FC = () => {
  const { animeId } = useParams<IParams>()
  const {
    data: response,
    isLoading,
    isError,
  } = useQuery('animeDetail', () =>
    AnimeService.getAnimeDetail(parseInt(animeId)),
  )

  if (isLoading) {
    return <Skeleton active />
  }

  if (isError) {
    return <ErrorBoundary />
  }

  const animeDetailsData: IAnimeDetailsData = response?.data
  const { images } = animeDetailsData.data
  return (
    <Layout>
      <StyledDivContainer>
        <StyledImage preview={false} src={images.jpg.large_image_ur} />
      </StyledDivContainer>
    </Layout>
  )
}

export default AnimeDetail
