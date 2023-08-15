import React, { FC } from 'react'
import Navbar from '../components/navbar/Navbar'
import WrappedContent from '../components/Content'
import GlobalStyle from './globals/GlobalStyle'
import { QueryProvider } from './providers/queryProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AnimeDetail from '../components/AnimeDetail'
import { Layout } from 'antd'
import Sidebar from '../components/Sidebar'
import { store } from '../store'
import { Provider } from 'react-redux'

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
                      <WrappedContent />
                    </Route>
                    <Route exact path={'/anime/:animeId'}>
                      <AnimeDetail />
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
