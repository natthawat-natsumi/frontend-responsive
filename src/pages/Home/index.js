import React, { Component } from 'react'
import styled from '@emotion/styled'
import Athlets from '../Athlets'
import Player from '../Player'

class Home extends Component {
  render = () => {
    return (
      <HTMLViewPort>
        <Athlets />
        <HTMLBreakPoint />
        <Player />
      </HTMLViewPort>
    )
  }
}
export default Home

const HTMLViewPort = styled.div`
  display: block;
  background-color: #FFFFFF;
  max-width: 1280px;
  height: 100vh;
  margin: 0px auto;
  overflow: auto;
`
const HTMLBreakPoint = styled.div`
  display: block;
  width: 100%;
  height: 100px;
  @media only screen and (max-width: 420px) {
    height: 40px;
  }
`