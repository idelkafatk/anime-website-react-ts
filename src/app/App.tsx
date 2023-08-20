import React, { FC } from 'react'
import Navbar from '../components/navbar/Navbar'
import { StyledContent } from '../components/Content'
import GlobalStyle from './globals/GlobalStyle'
import { QueryProvider } from './providers/queryProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from '../components/Sidebar'
import { store } from '../store'
import { Provider } from 'react-redux'
import AnimeTops from '../components/AnimeTops'
import AnimeSearch from '../components/AnimeSearch'
import AnimeDetail from '../components/AnimeDetail'
import FavouriteAnimeList from '../components/FavouriteAnimeList'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <QueryProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Navbar />
              <Layout>
                <Sidebar />
                <Layout>
                  <Switch>
                    <Route exact path={'/'}>
                      <StyledContent>
                        <AnimeSearch />
                      </StyledContent>
                    </Route>
                    <Route exact path={'/top'}>
                      <StyledContent>
                        <AnimeTops />
                      </StyledContent>
                    </Route>
                    <Route exact path={'/anime/:animeId'}>
                      <AnimeDetail />
                    </Route>
                    <Route exact path={'/favourite'}>
                      <FavouriteAnimeList />
                    </Route>
                  </Switch>
                </Layout>
              </Layout>
            </Layout>
          </BrowserRouter>
        </Provider>
      </QueryProvider>
    </>
  )
}

export default App
