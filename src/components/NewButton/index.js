import {v4 as uuidv4} from 'uuid'

import NxtSlidesContext from '../../context'

import './index.css'

const NewButton = () => (
  <NxtSlidesContext.Consumer>
    {value => {
      const {addNewItem, changeActiveTab, activeIndex} = value

      const onClickNewBtn = () => {
        const id = uuidv4()
        const slideItem = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(slideItem)
        changeActiveTab(activeIndex + 1)
      }

      return (
        <div className="new-btn-container">
          <button className="btn" type="button" onClick={onClickNewBtn}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              className="plus-img"
              alt="new plus icon"
            />
            New
          </button>
        </div>
      )
    }}
  </NxtSlidesContext.Consumer>
)
export default NewButton
