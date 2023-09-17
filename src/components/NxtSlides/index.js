import {Component} from 'react'

import Slide from '../Slide'

import SlideItem from '../SlideItem'

import NxtSlidesContext from '../../context'

import './index.css'

class NxtSlides extends Component {
  render() {
    return (
      <NxtSlidesContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="nxt-slides-container">
              <ol className="lists-container">
                {initialList.map((each, index) => (
                  <SlideItem data={each} key={each.id} num={index + 1} />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </NxtSlidesContext.Consumer>
    )
  }
}
export default NxtSlides
