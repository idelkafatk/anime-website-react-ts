import React, { FC, JSX, useEffect } from 'react'
import { Alert, Card, Image, Skeleton, Tooltip } from 'antd'
import { keyframes, styled } from 'styled-components'
import { useQuery } from 'react-query'
import { AnimeService } from '../services/anime/animeApiService'
import IAnimeList, { IAnimeItem } from '../types/anime/IAnimeList'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { updateCurrentOffset } from '../store/slices/anime/animeListSlice'

const { Meta } = Card

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const StyledDivContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 30px;
  background-color: #232323;
  overflow-y: auto;
  gap: 20px;
`

const StyledDivList = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const StyledImage = styled(Image)`
  height: 320px;
  width: 220px;
  object-fit: cover;
  animation: ${fadeIn} 500ms ease-in;

  &.item-exit {
    animation: ${fadeOut} 500ms ease-in;
  }
`

const StyledMeta = styled(Meta)``

const StyledCard = styled(Card)`
  width: 220px;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    ${StyledImage} {
      opacity: 0.8;
      transition: 0.3s;
    }

    ${StyledMeta} {
      opacity: 0.8;
      transition: 0.3s;
    }
  }
`

const PaginationContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
`

const StyledLeftSquareOutlined = styled(LeftSquareOutlined)`
  color: #039750;
  font-size: 30px;

  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`

const StyledRightSquareOutlined = styled(RightSquareOutlined)`
  color: #039750;
  font-size: 30px;

  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`

const AnimeCards: FC = () => {
  const { query, queryKey } = useTypedSelector((state) => state.searchQuery)
  const { currentOffset, limit } = useTypedSelector((state) => state.offset)
  const dispatch = useDispatch()

  const {
    data: response,
    isLoading,
    isError,
    isFetching,
  } = useQuery(
    queryKey,
    () => AnimeService.getAll(currentOffset, query, limit),
    {
      select: ({ data }) => data,
      staleTime: 60000,
    },
  )

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [currentOffset])

  if (isError) {
    return <Alert message="Ошибка загрузки" type="error" />
  }

  const handlePageChange = (type: string) => {
    type === 'prev'
      ? dispatch(updateCurrentOffset(currentOffset - limit))
      : dispatch(updateCurrentOffset(currentOffset + limit))
  }

  const renderItems = (): JSX.Element => {
    const animeList: IAnimeList = response
    const animeItems =
      isLoading || isFetching
        ? Array.from({ length: limit }).map((_, i) => {
            return (
              <CSSTransition classNames="item" timeout={500} key={i}>
                <StyledCard
                  hoverable
                  cover={
                    <Skeleton.Avatar
                      shape={'square'}
                      style={{ width: 220, height: 313, border: 5 }}
                      active
                    />
                  }
                >
                  <StyledMeta title={<Skeleton.Input active />} />
                </StyledCard>
              </CSSTransition>
            )
          })
        : animeList.data.map((animeItem: IAnimeItem, _: number) => {
            const { id, title, main_picture } = animeItem.node
            const picture =
              !main_picture || !main_picture.large || !main_picture.medium ? (
                <Skeleton.Image
                  style={{ width: 220, height: 320, border: 5 }}
                />
              ) : (
                <StyledImage
                  preview={false}
                  alt={title}
                  src={main_picture.large}
                />
              )
            return (
              <CSSTransition classNames="item" timeout={500} key={id}>
                <Link to={`/anime/${id}`}>
                  <StyledCard bordered={false} hoverable cover={picture}>
                    <Meta
                      title={
                        <Tooltip
                          placement="topLeft"
                          color="#039750"
                          title={title}
                        >
                          <span>{title}</span>
                        </Tooltip>
                      }
                    />
                  </StyledCard>
                </Link>
              </CSSTransition>
            )
          })

    return (
      <StyledDivList>
        <TransitionGroup component={null}>{animeItems}</TransitionGroup>
      </StyledDivList>
    )
  }
  const renderedAnimeList = renderItems()
  console.log('render')
  return (
    <StyledDivContainer>
      {renderedAnimeList}
      <PaginationContainer>
        {!(isLoading || isFetching) ? (
          response.paging.previous ? (
            <StyledLeftSquareOutlined
              onClick={() => handlePageChange('prev')}
            />
          ) : (
            <StyledLeftSquareOutlined
              style={{ opacity: 0.5, cursor: 'not-allowed' }}
            />
          )
        ) : (
          <StyledLeftSquareOutlined
            style={{ opacity: 0.5, cursor: 'not-allowed' }}
          />
        )}
        {!(isLoading || isFetching) ? (
          response.paging.next ? (
            <StyledRightSquareOutlined
              onClick={() => handlePageChange('next')}
            />
          ) : (
            <StyledRightSquareOutlined
              style={{ opacity: 0.5, cursor: 'not-allowed' }}
            />
          )
        ) : (
          <StyledRightSquareOutlined
            style={{ opacity: 0.5, cursor: 'not-allowed' }}
          />
        )}
      </PaginationContainer>
    </StyledDivContainer>
  )
}

export default AnimeCards
