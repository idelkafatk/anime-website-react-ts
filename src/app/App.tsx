import React, { FC } from 'react'
import Navbar from '../components/Navbar'
import WrappedContent from '../components/Content'
import GlobalStyle from './globals/GlobalStyle'
import { QueryProvider } from './providers/queryProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AnimeDetail from '../components/AnimeDetail'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <QueryProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path={'/'}>
              <WrappedContent />
            </Route>
            <Route exact path={'/anime/:animeId'}>
              <AnimeDetail />
            </Route>
          </Switch>
        </BrowserRouter>
      </QueryProvider>
    </>
  )
}

export default App
