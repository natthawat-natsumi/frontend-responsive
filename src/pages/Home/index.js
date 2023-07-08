import React, { Component } from 'react'
import styled from '@emotion/styled'
import Athlets from '../Athlets'

class Home extends Component {
  render = () => {
    return (
      <HTMLViewPort>
        <Athlets />
      </HTMLViewPort>
    )
  }
}
export default Home

const HTMLViewPort = styled.div`
  display: block;
  max-width: 1280px;
  height: 100vh;
  margin: 0px auto;
  overflow: auto;
`