import React, { Component, createRef } from 'react'
import styled from '@emotion/styled'
import FootballerPhoto from '../../images/footballer-big.svg'
import FootballerWatermask from '../../images/footballer-watermask.svg'

class Athlets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseDown: false,
      startX: 0,
      scrollLeft: 0
    }
    this.slideRef = createRef()
  }

  onSelectActiveContent = (direction) => {
    const container = this.slideRef.current
    const left = (window.pageXOffset || container.scrollLeft) - (container.clientLeft || 0)
    let far = container.offsetWidth/10 * direction;
    let pos = left + far;
    container.scrollTo({
      top: 0,
      left: pos,
      behavior: 'smooth'
    })
  }

  onMouseDown = e => {
    const container = this.slideRef.current
    container.classList.add('active');
    this.setState({
      mouseDown: true,
      startX: e.pageX - container.offsetLeft,
      scrollLeft: container.scrollLeft
    })
  }

  onMouseLeave = () => {
    const container = this.slideRef.current
    container.classList.remove('active');
    this.setState({
      mouseDown: false
    })
  }

  onMouseUp = () => {
    const container = this.slideRef.current
    container.classList.remove('active');
    this.setState({
      mouseDown: false
    })
  }

  onMouseMove = e => {
    const container = this.slideRef.current
    const {mouseDown, startX, scrollLeft} = this.state
    if(!mouseDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    container.scrollLeft = scrollLeft - walk;
}

  componentDidMount = () => {
    if (this.slideRef !== null) {
      this.slideRef.current.addEventListener('mousedown', this.onMouseDown)
      this.slideRef.current.addEventListener('mouseleave', this.onMouseLeave)
      this.slideRef.current.addEventListener('mouseup', this.onMouseUp)
      this.slideRef.current.addEventListener('mousemove', this.onMouseMove)
    }
  }

  componentWillUnmount = () => {

    if (this.slideRef !== null) {
      this.slideRef.current.removeEventListener('mousedown', this.onMouseDown)
      this.slideRef.current.removeEventListener('mouseleave', this.onMouseLeave)
      this.slideRef.current.removeEventListener('mouseup', this.onMouseUp)
      this.slideRef.current.removeEventListener('mousemove', this.onMouseMove)
    }
  }

  render = () => {
    return (
      <HTMLContent>
        <HTMLTitle>ATHLETS</HTMLTitle>
        <HTMLPhoto />
        <HTMLList ref={this.slideRef}>
          <HTMLItemList>
            <HTMLSection className='item-head'>
              <HTMLText className='_no'>01</HTMLText>
              <HTMLText className='_title'>CONNECTION</HTMLText>
            </HTMLSection>
            <HTMLSection className='item-content'>
              Connect with coaches directly, you can ping coaches to view profile.
            </HTMLSection>
          </HTMLItemList>

          <HTMLItemList>
            <HTMLSection className='item-head'>
              <HTMLText className='_no'>02</HTMLText>
              <HTMLText className='_title'>COLLABORATION</HTMLText>
            </HTMLSection>
            <HTMLSection className='item-content'>
              Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
            </HTMLSection>
          </HTMLItemList>

          <HTMLItemList>
            <HTMLSection className='item-head'>
              <HTMLText className='_no'>03</HTMLText>
              <HTMLText className='_title'>GROWTH</HTMLText>
            </HTMLSection>
            <HTMLSection className='item-content'>
              Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc
            </HTMLSection>
          </HTMLItemList>

        </HTMLList>
      </HTMLContent>
    )
  }
}
export default Athlets

const HTMLContent = styled.div`
  display: block;
  background-color: #FFFFFF;
  position: relative;

  .item-head {
    display: flex;
    align-items: center;
    padding: 0px 8% 0px 50%;
    ._no {
      font-size: 18px;
      font-weight: 400;
      position: relative;
      padding: 0px 5px 0px 0px;
      &:after {
        content: '';
        display: block;
        background-color: #603EBE;
        width: 100%;
        height: 5px;
        border-radius: 5px;
      }
    }
    ._title {
      font-size: 36px;
      font-weight: 400;
      color: #C2C2C2;
    }
  }
  .item-content {
    padding: 0px 8% 0px 50%;
    font-size: 20px;
    font-weight: 400;
    margin: 30px 0px 0px;
  }

  @media only screen and (max-width: 410px) {
    h1 {
      font-size: 45px;
      padding: 0px;
      text-align: center;
    }
    .item-head {
      padding: 0px 20px;
    }
    .item-content {
      padding: 0px 20px;
    }
  }
  
`

const HTMLTitle = styled.h1`
  display: block;
  padding: 0px 8% 0px 50%;
  font-size: 90px;
  font-weight: 400;
  color: #E7E7E7;
  margin: 0px;
`
const HTMLSection = styled.div`
  display: block;
`
const HTMLText = styled.div`
  display: inline-block;
`
const HTMLList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px 0px 0px;

  @media only screen and (max-width: 420px) {
    flex-direction: row;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    &::-webkit-scrollbar {display: none; /* for Chrome, Safari, and Opera */ }
  }
`
const HTMLItemList = styled.li`
  display: block;
  padding: 26px 0px;
  &:nth-child(2) { background-color: #F5F4F9; }
  &:nth-child(3) {
    background-color: #5E3DB3;
    .item-head {
      ._no {
        &:after {
          content: '';
          display: block;
          background-color: #FFFFFF;
          width: 100%;
          height: 5px;
          border-radius: 5px;
        }
      }
    }
    .item-content { color: #FFFFFF; }
  }

  @media only screen and (max-width: 420px) {
    flex: 0 0 100%;
  }
`
const HTMLPhoto = styled.div`
  display: block;
  background-image: url(${FootballerPhoto});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: calc(100% - 50px) center;
  position: absolute;
  top: 40px;
  left: 0px;
  width: 50%;
  height: 100%;
  transition: 1s;

  @media only screen and (max-width: 420px) {
    background-position: center !important;
    width: 100%  !important;
    position: relative  !important;
    height: 240px  !important;
    top: 0px  !important;
    left: 0px !important;
  }

  @media only screen and (max-width: 768px) {
    background-image: url(${FootballerWatermask});
    background-position: calc(100% - 180px) center;
    width: 70%;
  }
`
const HTMLNavigation = styled.ul`
  display: ;
`
