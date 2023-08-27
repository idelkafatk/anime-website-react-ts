import { Layout, notification, Skeleton, Tag, Typography } from 'antd'
import { styled } from 'styled-components'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IParams } from '../../../types/IParams'
import { useMutation, useQuery } from 'react-query'
import { AnimeService } from '../../../entities/anime'
import { useFavouriteAnimeQuery } from '../hooks/useFavouriteAnimeQuery'
import IAnimeList from '../../../types/anime/api/IAnimeList'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { queryClient } from '../../../app/providers'
import { IAnimeDetailsData } from '../../../types/anime/api/IAnimeDetails'
import { StyledImage, StyledTitle } from '../../../shared/ui/styled'
import {
  AddToFavourite,
  AnimeRate,
  AnimeTrailer,
} from '../../../features/anime'

const { Content } = Layout
const { Text } = Typography

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

const ImageContainer = styled.div`
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

export const AnimeDetail: FC = () => {
  const { animeId } = useParams<IParams>()
  const favouriteAnimeQueryKey = ['favouriteAnime', animeId]
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

  const { data: favouriteAnimeData, isFetching: isFavouriteAnimeFetching } =
    useFavouriteAnimeQuery(favouriteAnimeQueryKey)
  const favouriteAnimeList: IAnimeList = favouriteAnimeData
  const [inFavorite, setInFavourite] = useState<boolean>(false)

  useEffect(() => {
    const isAnimeInFavorites = favouriteAnimeList?.data.some(
      ({ node }) => node.id === parseInt(animeId),
    )
    setInFavourite(isAnimeInFavorites)
  }, [favouriteAnimeList, animeId])

  const addToFavourites = useMutation(['animeAddFavourite', animeId], () =>
    AnimeService.addFavouriteAnimeItem(parseInt(animeId)),
  )
  const deleteFromFavourites = useMutation(
    ['animeDeleteFavourite', animeId],
    () => AnimeService.deleteFavouriteAnimeItem(parseInt(animeId)),
  )

  if (isError) {
    return <ErrorBoundary />
  }

  const handleFavourite = async () => {
    if (addToFavourites.isLoading || deleteFromFavourites.isLoading) {
      return
    }

    try {
      if (inFavorite) {
        await deleteFromFavourites.mutateAsync()
        await queryClient.invalidateQueries(favouriteAnimeQueryKey)
      } else {
        await addToFavourites.mutateAsync()
        await queryClient.invalidateQueries(favouriteAnimeQueryKey)
      }

      notification.success({
        message: 'Успешно',
        description: inFavorite
          ? 'Удалено из избранного'
          : 'Добавлено в избранное',
        placement: 'bottomLeft',
      })
    } catch (error) {
      notification.error({
        message: 'Ошибка',
        description: 'Произошла ошибка',
        placement: 'bottomLeft',
      })
    }
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
    const rate = score ? score / 2 : 0
    const showTrailer = !(isLoading || isFetching) && trailer?.url && (
      <AnimeTrailer trailerUrl={trailer?.url} />
    )

    return (
      <StyledContent>
        <TitleContainer>
          <StyledTitle style={{ margin: 0 }} level={2}>
            {showTitle}
          </StyledTitle>
        </TitleContainer>
        <ContentContainer>
          <LeftCol>
            <ImageContainer>{image}</ImageContainer>
            {showGenres}
            <AnimeRate rate={rate}></AnimeRate>
            <AddToFavourite
              inFavourite={inFavorite}
              handleFavourite={handleFavourite}
              loading={
                addToFavourites.isLoading ||
                deleteFromFavourites.isLoading ||
                isFavouriteAnimeFetching
              }
            />
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
