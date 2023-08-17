import React, { FC, JSX, ReactNode } from 'react'
import { Alert, Avatar, Card, Image, Skeleton, Tooltip } from 'antd'
import { keyframes, styled } from 'styled-components'
import IAnimeList, { IAnimeItem } from '../types/anime/IAnimeList'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import { useTypedSelector } from '../hooks/useTypedSelector'
import PaginationElement from './elements/PaginationElement'

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
  padding-top: 10px;
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

const StyledFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IAnimeListProps {
  animeList: IAnimeList
  isLoading?: boolean
  isError?: boolean
  isFetching?: boolean
  handlePageChange?: (type: string) => void
  rank?: number
  top?: boolean
  filters?: ReactNode[]
}

const AnimeList: FC<IAnimeListProps> = ({
  animeList,
  isLoading,
  isError,
  isFetching,
  handlePageChange,
  top,
  filters,
}) => {
  const { limit } = useTypedSelector((state) => state.offset)

  if (isError) {
    return <Alert message="Ошибка загрузки" type="error" />
  }

  const renderItems = (): JSX.Element => {
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
      : animeList.data.map((animeItem: IAnimeItem, _: number) => {
          const { id, title, main_picture } = animeItem.node
          const rank = animeItem.ranking?.rank
          const picture =
            !main_picture || !main_picture.large || !main_picture.medium ? (
              <Skeleton.Image style={{ width: 220, height: 320, border: 5 }} />
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
                  {rank && (
                    <Avatar
                      style={{
                        position: 'absolute',
                        top: 2,
                        left: 2,
                        zIndex: 1,
                        backgroundColor: 'red',
                      }}
                    >
                      {rank}
                    </Avatar>
                  )}
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

  return (
    <StyledDivContainer>
      {filters && <StyledFilters>{filters}</StyledFilters>}
      {renderedAnimeList}
      {!top && (
        <PaginationContainer>
          <PaginationElement
            icon={
              <StyledLeftSquareOutlined
                onClick={() => handlePageChange && handlePageChange('prev')}
              />
            }
            disabled={
              isLoading || isFetching || animeList.paging.previous === undefined
            }
          />
          <PaginationElement
            icon={
              <StyledRightSquareOutlined
                onClick={() => handlePageChange && handlePageChange('next')}
              />
            }
            disabled={
              isLoading || isFetching || animeList.paging.next === undefined
            }
          />
        </PaginationContainer>
      )}
    </StyledDivContainer>
  )
}

export default AnimeList
