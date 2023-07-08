import { Route, Switch } from 'react-router-dom'
import React, { lazy } from 'react'
import styled from '@emotion/styled'

const AppPlication = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
`

const Home = lazy(() => import('./pages/Home'))

export default (
  <AppPlication id='frontend-responsive' className='application'>
    <Switch>
      <Route path='/' component={Home} />
      <Route component={() => <div>404 Page not found</div>} />
    </Switch>
  </AppPlication>
)
