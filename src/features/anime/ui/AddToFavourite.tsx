import { FC } from 'react'
import { Button } from 'antd'
import { styled } from 'styled-components'

interface IAddToFavouriteProps {
  inFavourite: boolean
  handleFavourite: () => void
  loading: boolean
}

const AddToFavouriteContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const AddToFavourite: FC<IAddToFavouriteProps> = ({
  inFavourite,
  handleFavourite,
  loading,
}) => {
  const favouriteBtnText = inFavourite ? 'В избранном' : 'Добавить в избранное'

  return (
    <AddToFavouriteContainer>
      <Button
        type="primary"
        style={{
          width: 200,
          textAlign: 'center',
          backgroundColor: inFavourite ? 'gray' : '#039750',
          border: 0,
        }}
        onClick={() => handleFavourite()}
        loading={loading}
      >
        {favouriteBtnText}
      </Button>
    </AddToFavouriteContainer>
  )
}
