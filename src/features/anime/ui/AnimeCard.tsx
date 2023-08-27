import React, { FC } from 'react'
import { IAnimeItem } from '../../../types/anime/api/IAnimeList'
import { Avatar, Tooltip } from 'antd'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { StyledCard, StyledMeta } from '../../../shared/ui/styled/'
import { AnimePicture } from './AnimePicture'

interface IAnimeCardProps {
  animeItem: IAnimeItem
}

export const AnimeCard: FC<IAnimeCardProps> = ({ animeItem }) => {
  const { id, title, main_picture } = animeItem.node
  const rank = animeItem.ranking?.rank
  const picture = <AnimePicture main_picture={main_picture} title={title} />
  return (
    <CSSTransition classNames="item" timeout={500}>
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
          <StyledMeta
            title={
              <Tooltip placement="topLeft" color="#039750" title={title}>
                <span>{title}</span>
              </Tooltip>
            }
          />
        </StyledCard>
      </Link>
    </CSSTransition>
  )
}
