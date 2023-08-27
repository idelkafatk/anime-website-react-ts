import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card, Skeleton } from 'antd'
import { StyledCard } from '../../../shared/ui/styled/'

const { Meta } = Card

export const AnimeCardSkeleton: FC = () => {
  return (
    <CSSTransition classNames="item" timeout={500}>
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
        <Meta title={<Skeleton.Input active />} />
      </StyledCard>
    </CSSTransition>
  )
}
