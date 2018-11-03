/*REFACTORED for redux-with-containers branch*/
import '../stylesheets/App.scss'
import PropTypes from 'prop-types'
import { Component } from 'react'
import SortMenu from './SortMenu'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'
import storeFactory from '../store'
import { sortFunction } from '../lib/array-helpers'

class App extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }

  }
  componentWillMount() {
    //store.subscribe returns a f(x) for unsubscribe() assign it to `unsubscribe` on `this`
    this.unsubscribe = store.subscribe(
      () => this.forceUpdate()//triggers updating lifecycle --> rendering UI
    )
  }
  componentWillUnmount() {
      this.unsubscribe() //stop listening to the store
  }
  render() {
    //const {colors, sort} = store.getState()
    //const sortedColors = [...colors].sort(sortFunction(sort))
    //*Remains mostlty the same as before Except * it renders Containers of the UI components instead of the presentational components themselves.
    return(
      <div className="app">
        <Menu />
        <NewColor />
        <Colors />
      </div>
    )
  }//close render()
}//close <App/>

App.propTypes = {
  store: PropTypes.object.isRequired
}
//This one is for the kids!
App.childContextTypes = {
  //now any childrend of the App will have access to the store
  store: PropTypes.object.isRequired//define context object
}

export default App
