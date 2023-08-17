import { FC } from 'react'
import { Carousel } from 'antd'
import { styled } from 'styled-components'

const StyledSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232323;
`

const StyledCarousel = styled(Carousel)`
  justify-self: center;
`

const StyledText = styled.h3`
  height: 160px;
  color: #fff;
  background: #364d79;
`

const AnimeSlider: FC = () => {
  return (
    <StyledSliderContainer>
      <StyledCarousel autoplay>
        <div>
          <StyledText>1</StyledText>
        </div>
        <div>
          <StyledText>2</StyledText>
        </div>
        <div>
          <StyledText>3</StyledText>
        </div>
        <div>
          <StyledText>4</StyledText>
        </div>
      </StyledCarousel>
    </StyledSliderContainer>
  )
}
export default AnimeSlider
