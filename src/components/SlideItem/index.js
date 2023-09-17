import {Component} from 'react'

import NxtSlidesContext from '../../context'

import './index.css'

class SlideItem extends Component {
  render() {
    const {data, num} = this.props
    const {heading, description} = data

    return (
      <NxtSlidesContext.Consumer>
        {value => {
          const {activeIndex, changeActiveTab} = value
          const isActive = activeIndex === num - 1
          const addStyle = isActive ? 'add-style' : ''

          const onClickSlideTab = () => {
            changeActiveTab(num - 1)
          }

          return (
            <li
              className={`list-item ${addStyle}`}
              testid={`slideTab${num}`}
              onClick={onClickSlideTab}
            >
              <p className="slide-tab-num">{num}</p>
              <div className="slide-tab-container">
                <h1 className="h1">{heading}</h1>
                <p className="desc">{description}</p>
              </div>
            </li>
          )
        }}
      </NxtSlidesContext.Consumer>
    )
  }
}

// const SlideItem = props => {
//   const {data, serialNum} = props

//   const {heading, description} = data

//   return (
//     <div>
//       <li className="slide" test-id={`slideTab${serialNum}`}>
//         <p>{serialNum}</p>
//         <div className="slide-item">
//           <h1 className="heading">{heading}</h1>
//           <p className="description">{description}</p>
//         </div>
//       </li>
//     </div>
//   )
// }
export default SlideItem
