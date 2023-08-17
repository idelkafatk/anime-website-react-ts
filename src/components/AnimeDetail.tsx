import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { AnimeService } from '../services/anime/animeApiService'
import { useParams } from 'react-router-dom'
import { IParams } from '../types/IParams'
import { Layout, Rate, Skeleton, Tag, Typography } from 'antd'
import { IAnimeDetailsData } from '../types/anime/IAnimeDetails'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { styled } from 'styled-components'
import { StyledImage } from './AnimeList'
import ReactPlayer from 'react-player'

const { Content } = Layout
const { Title, Text } = Typography

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const RightCol = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  width: 100vw;
`

const ImageDivContainer = styled.div`
  background: #202020;
  padding: 50px 50px 0 50px;
  display: flex;
  justify-content: center;
`

const TitleContainer = styled.div`
  background-color: #202020;
  padding: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: end;
`

const ContentContainer = styled.div`
  display: flex;
`

const CustomStyledImage = styled(StyledImage)`
  border-radius: 5px;
`

const StyledContent = styled(Content)`
  background-color: #202020;
  overflow: auto;
  height: 100vh;
  padding-bottom: 100px;
`

const StyledTitle = styled(Title)`
  &.ant-typography {
    color: white;
  }
`

const StyledText = styled(Text)`
  color: white;
`

const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px 0 50px;
`

const DescriptionContainer = styled.div`
  padding: 50px 50px 0 0;
`

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 20px;
`

const RateContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px 0 50px;
`

const AnimeDetail: FC = () => {
  const { animeId } = useParams<IParams>()
  const {
    data: response,
    isLoading,
    isError,
    isFetching,
  } = useQuery(
    'animeDetail',
    () => AnimeService.getAnimeDetail(parseInt(animeId)),
    {
      select: ({ data }) => data,
    },
  )

  if (isError) {
    return <ErrorBoundary />
  }

  const renderAnimeDetail = () => {
    const animeDetailsData: IAnimeDetailsData | undefined = response
    const { images, score, title, synopsis, trailer, genres } =
      animeDetailsData?.data || {}
    const image =
      isLoading || isFetching ? (
        <Skeleton.Avatar
          shape="square"
          style={{ width: 220, height: 320, border: 5, borderRadius: 5 }}
          active
        />
      ) : (
        <CustomStyledImage
          preview={false}
          src={images?.jpg.large_image_url}
          alt={title}
        />
      )
    const showTitle =
      isLoading || isFetching ? (
        <Skeleton.Input style={{ width: 300 }} active />
      ) : (
        title
      )
    const description =
      isLoading || isFetching ? (
        <Skeleton title={false} paragraph={{ rows: 3 }} active />
      ) : (
        synopsis
      )
    const showGenres =
      isLoading || isFetching ? null : (
        <GenresContainer>
          {genres?.map(({ mal_id, name }) => {
            return (
              <Tag
                color="black"
                style={{ borderRadius: 5, height: 20, marginBottom: 5 }}
                key={mal_id}
              >
                {name}
              </Tag>
            )
          })}
        </GenresContainer>
      )
    const rate = isLoading || isFetching ? 0 : score ? score / 2 : 0
    const showTrailer =
      isLoading || isFetching ? null : trailer?.url ? (
        <PlayerContainer>
          <StyledTitle
            style={{
              display: 'flex',
              margin: 0,
              paddingLeft: 250,
              justifySelf: 'center',
            }}
            level={2}
          >
            Трейлер
          </StyledTitle>
          <ReactPlayer url={trailer?.url} controls />
        </PlayerContainer>
      ) : null

    return (
      <StyledContent>
        <TitleContainer>
          <StyledTitle style={{ margin: 0 }} level={2}>
            {showTitle}
          </StyledTitle>
        </TitleContainer>
        <ContentContainer>
          <LeftCol>
            <ImageDivContainer>{image}</ImageDivContainer>
            {showGenres}
            <RateContainer>
              <Rate value={rate} allowHalf disabled />
            </RateContainer>
          </LeftCol>
          <RightCol>
            <DescriptionContainer>
              <StyledText>{description}</StyledText>
            </DescriptionContainer>
            {showTrailer}
          </RightCol>
        </ContentContainer>
      </StyledContent>
    )
  }

  const animeDetail = renderAnimeDetail()

  return <>{animeDetail}</>
}

export default AnimeDetail
