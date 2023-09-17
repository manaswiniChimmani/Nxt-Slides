import {Component} from 'react'

import NewButton from './components/NewButton'

import Header from './components/Header'

import NxtSlides from './components/NxtSlides'

import NxtSlidesContext from './context'

import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
// const App = () => <div>Hello World</div>

const add = (list, index, item) => [
  ...list.slice(0, index),
  item,
  ...list.slice(index),
]

class App extends Component {
  state = {initialList: initialSlidesList, activeIndex: 0}

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((each, index) => {
        if (activeIndex === index) {
          return {...each, heading: value}
        }
        return each
      })
      return {initialList: newList}
    })
  }

  changeDescription = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((each, index) => {
        if (activeIndex === index) {
          return {...each, description: value}
        }
        return each
      })
      return {initialList: newList}
    })
  }

  changeActiveTab = index => {
    this.setState({activeIndex: index})
  }

  addNewItem = item => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = add(initialList, activeIndex + 1, item)
      return {initialList: [...newList]}
    })
  }

  render() {
    const {initialList, activeIndex} = this.state
    return (
      <div>
        <Header />
        <NxtSlidesContext.Provider
          value={{
            initialList,
            activeIndex,
            changeActiveTab: this.changeActiveTab,
            addNewItem: this.addNewItem,
            changeHeading: this.changeHeading,
            changeDescription: this.changeDescription,
          }}
        >
          <NewButton />
          <NxtSlides />
        </NxtSlidesContext.Provider>
      </div>
    )
  }
}

export default App
