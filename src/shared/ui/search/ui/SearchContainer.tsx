import { Input, Tooltip } from 'antd'
import { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { styled } from 'styled-components'
import { useTypedDispatch } from '../../../lib'
import { updateSearchQuery } from '../../../../features/anime'

const { Search } = Input

const StyledSearch = styled(Search)`
  max-width: 300px;
`

const StyledSearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const SearchContainer: FC = () => {
  const dispatch = useTypedDispatch()
  const [searchError, setSearchError] = useState<boolean>(false)
  const history = useHistory()

  const handleSearchQuery = async (value: string) => {
    const englishReg = /^[a-zA-Z\s]+$/

    if (value.length >= 3 && englishReg.test(value)) {
      setSearchError(false)
      dispatch(updateSearchQuery(value))

      history.push('/')
    } else {
      setSearchError(true)

      setTimeout(() => {
        setSearchError(false)
      }, 3500)
    }
  }

  const handleInputBlur = () => {
    setSearchError(false)
  }

  return (
    <StyledSearchContainer>
      <Tooltip title="Введите минимум 3 латинских символа" open={searchError}>
        <StyledSearch
          placeholder="Введите название аниме"
          enterButton
          size="large"
          onSearch={handleSearchQuery}
          onBlur={handleInputBlur}
        />
      </Tooltip>
    </StyledSearchContainer>
  )
}
