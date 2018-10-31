import AddColorForm from './components/AddColorForm'
import SortMenu from './SortMenu'
import ColorList from './components/ColorList'

const App = ({ store }) =>
  <div className="app">
    <SortMenu store={store} />
    <AddColorForm store={store} />
    <ColorList store={store}/>
  </div>

  export default App
