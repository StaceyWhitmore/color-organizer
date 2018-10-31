import React from 'react'
import AddColorForm from './components/AddColorForm'
import SortMenu from './SortMenu'
import ColorList from './components/ColorList'

//    <SortMenu store={store} />
const App = ({ store }) =>
  <div className="app">
    <SortMenu store={store} />
    <AddColorForm store={store} />
    <ColorList store={store}/>
  </div>

  export default App
