import { styled } from 'styled-components'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { updateSearchQuery } from '../../store/slices/anime/animeSearchSlice'
import { FC } from 'react'

const { Search } = Input

const StyledSearch = styled(Search)`
  max-width: 300px;
  color: #039750;
`

const StyledSearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const SearchContainer: FC = () => {
  const dispatch = useDispatch()

  const handleSearchQuery = async (value: string) => {
    dispatch(updateSearchQuery(value))
  }

  return (
    <StyledSearchContainer>
      <StyledSearch
        placeholder="Введите название аниме"
        enterButton
        onSearch={handleSearchQuery}
      />
    </StyledSearchContainer>
  )
}

export default SearchContainer
