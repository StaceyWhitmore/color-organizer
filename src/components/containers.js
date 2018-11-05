/*REFACTORED for redux-with-containers branch*/
import PropTypes from 'prop-types'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import { addColor,
         sortColors,
         rateColor,
         removeColor } from '../actions'
import { sortFunction } from './lib/array-helpers'

export const NewColor = (props, {store}) =>
  <AddColorForm onNewColor={(title, color) =>
        store.dispatch( addColor(title,color))
  } />
  NewColor.contextTypes = {
    store: PropTypes.object
  }

  export const Menu = (props, {store}) =>
    <SortMenu sort={store.getState().sort} //passses the current sort property from the store's state
              onSelect={sortBy =>
                store.dispatch(sortColors(sortby))
              }/>

  Menu.contextTypes = {
    store: PropTypes.object
  }

export conts Colors = (props, {store}) => {//Remember BRACKETS {} on this one
  const {colors, sort } = store.getState()
  const sortedColors - [...colors].sort(sortFunction(sort))//use helper f(x) from array-helpers
  return (
    <ColorList colors={sortedColors}
               onRemove={id =>
               store.dispatch(
                 removeColor(id)//dispatch REMOVE_COLOR action
               )}
                onRate={(id,rating) =>
                store.dispatch(
                  rateColor(id, rating)
                )} />
  )//close return    ()
}//close <Colors()/> SFC

Colors.contextTypes = {
  store: PropTypes.object
}
