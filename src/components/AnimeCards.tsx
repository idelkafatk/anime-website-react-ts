import React, { JSX, useState } from 'react'
import { Alert, Card, Image, Skeleton, Tooltip } from 'antd'
import { keyframes, styled } from 'styled-components'
import { useQuery } from 'react-query'
import { AnimeService } from '../services/anime/animeApiService'
import IAnimeList, { IAnimeItem } from '../types/IAnimeList'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'

const { Meta } = Card

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const StyledDivContainer = styled.div`
  display: flex;
  background-color: #232323;
  padding-top: 50px;
`

const StyledDivList = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const StyledImage = styled(Image)`
  height: 320px;
  width: 220px;
  animation: ${fadeIn} 500ms ease-in;

  &.item-exit {
    animation: ${fadeOut} 500ms ease-in;
  }
`

const StyledMeta = styled(Meta)``
export const StyledCard = styled(Card)`
  width: 220px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #1da57a;

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

const AnimeCards = () => {
  const [query, setQuery] = useState<string>('one')
  const [limit, setLimit] = useState<number>(20)

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery('animeList', () => AnimeService.getAll(query, limit))

  if (isError) {
    return <Alert message="Ошибка загрузки" type="error" />
  }

  const renderItems = (): JSX.Element => {
    const animeList: IAnimeList = response?.data
    const animeItems = isLoading
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
      : animeList.data.map((animeItem: IAnimeItem, i: number) => {
          const { id, title, main_picture } = animeItem.node

          return (
            <CSSTransition classNames="item" timeout={500} key={id}>
              <Link to={`/anime/${id}`}>
                <StyledCard
                  bordered={false}
                  hoverable
                  cover={
                    <StyledImage
                      preview={false}
                      alt={title}
                      src={main_picture.large}
                    />
                  }
                >
                  <Meta
                    title={
                      <Tooltip color="#039750" title={title}>
                        <span>{title}</span>
                      </Tooltip>
                    }
                  />
                </StyledCard>
              </Link>
            </CSSTransition>
          )
        })
    console.log('render item')
    return (
      <StyledDivList>
        <TransitionGroup component={null}>{animeItems}</TransitionGroup>
      </StyledDivList>
    )
  }

  const animeList = renderItems()

  return <StyledDivContainer>{animeList}</StyledDivContainer>
}

export default AnimeCards
