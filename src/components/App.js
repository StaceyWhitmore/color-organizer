import '../stylesheets/App.scss'
//import React from 'react'
import AddColorForm from './AddColorForm'
import SortMenu from './SortMenu'
import ColorList from './ColorList'

//    <SortMenu store={store} />
const App = ({ store }) =>
  <div className="app">
    <SortMenu store={store} />
    <AddColorForm store={store} />
    <ColorList store={store}/>
  </div>

  export default App
