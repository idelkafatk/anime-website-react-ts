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
import AnimeTops from '../components/navigation/AnimeTops'
import AnimeSearch from '../components/AnimeSearch'
import AnimeDetail from '../components/AnimeDetail'
import AnimeSlider from '../components/AnimeSlider'

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
                        <AnimeSlider />
                      </StyledContent>
                    </Route>
                    <Route exact path={'/search'}>
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
