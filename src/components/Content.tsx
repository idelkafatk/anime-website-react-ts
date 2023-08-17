import { Layout } from 'antd'
import { styled } from 'styled-components'

const { Content } = Layout

export const StyledContent = styled(Content)`
  background-color: var(--color-bg-1);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
