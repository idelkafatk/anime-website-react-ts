import React, { FC } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import { QueryProvider } from './providers'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { store } from './redux'
import { Provider } from 'react-redux'
import { AnimeFavouritePage, AnimeTopPage, SearchPage } from '../pages/anime'
import { Sidebar } from '../shared/ui/navigation'
import { PageHeader } from '../shared/ui/header'
import { AnimeDetail } from '../widgets/anime'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <QueryProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <PageHeader />
              <Layout>
                <Sidebar />
                <Layout>
                  <Switch>
                    <Route exact path={'/top'}>
                      <AnimeTopPage />
                    </Route>
                    <Route exact path={'/'}>
                      <SearchPage />
                    </Route>
                    <Route exact path={'/anime/:animeId'}>
                      <AnimeDetail />
                    </Route>
                    <Route exact path={'/favourite'}>
                      <AnimeFavouritePage />
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
