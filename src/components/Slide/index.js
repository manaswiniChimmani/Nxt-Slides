import {Component} from 'react'

import NxtSlidesContext from '../../context'

import './index.css'

class Slide extends Component {
  state = {isHeadingUpdate: false, isDescriptionUpdate: false}

  onClickHeading = () => {
    this.setState({isHeadingUpdate: true})
  }

  onClickDescription = () => {
    this.setState({isDescriptionUpdate: true})
  }

  render() {
    const {isHeadingUpdate, isDescriptionUpdate} = this.state

    return (
      <NxtSlidesContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurDesc = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }

            this.setState({isDescriptionUpdate: false})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }

            this.setState({isHeadingUpdate: false})
          }

          const onChangeDesc = event => {
            changeDescription(event.target.value)
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const slideData = initialList[activeIndex]

          const {heading, description} = slideData

          return (
            <div className="slide-container">
              <div className="slide-container2">
                {isHeadingUpdate ? (
                  <input
                    type="text"
                    value={heading}
                    onBlur={onBlurHeading}
                    onChange={onChangeHeading}
                    className="heading-input"
                  />
                ) : (
                  <h1 onClick={this.onClickHeading} className="tab-heading">
                    {heading}
                  </h1>
                )}
                {isDescriptionUpdate ? (
                  <input
                    type="text"
                    value={description}
                    onBlur={onBlurDesc}
                    onChange={onChangeDesc}
                    className="description-input"
                  />
                ) : (
                  <p onClick={this.onClickDescription} className="tab-desc">
                    {description}
                  </p>
                )}
              </div>
            </div>
          )
        }}
      </NxtSlidesContext.Consumer>
    )
  }
}

export default Slide
