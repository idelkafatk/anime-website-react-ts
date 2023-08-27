import { FC } from 'react'
import { styled } from 'styled-components'
import ReactPlayer from 'react-player'
import { Typography } from 'antd'

const { Title } = Typography

interface IAnimeTrailerProps {
  trailerUrl: string
}

const StyledTitle = styled(Title)`
  &.ant-typography {
    color: white;
  }
`

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 20px;
`

export const AnimeTrailer: FC<IAnimeTrailerProps> = ({ trailerUrl }) => {
  return (
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
      <ReactPlayer url={trailerUrl} controls />
    </PlayerContainer>
  )
}
