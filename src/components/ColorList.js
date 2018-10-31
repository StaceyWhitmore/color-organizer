//This a Stateless Functional Component who's parent is <App/>
//This component will notify its parent when colors are rated or removed.
import React from 'react'
import PropTypes from 'prop-types'//no longer from 'react'
import Color from './Color'
import {rateColor, removeColor} from '../actions'
import {sortFunction} from './lib/array-helpers'
import '../stylesheets/ColorList.scss'


//const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) => {
  const {colors, sort} = store.getState()
  const sortedColors = [...colors].sort(sortFunction(sort))
  return (
    <div className="color-list">
      {
        (colors.lenth === 0) ?
          <p>No colors listed. (Add a color) </p> :
          sortedColors.map(color =>
            <Color key={color.id}
              {...color}
              onRate={(rating) =>
                //onRate(color.id, rating)}
                store.dispatch(
                  rateColor(color.id, rating)
                )
              }
              onRemove={() =>
                store.dispatch(
                  removeColor(color.id)
                )
              } />
              //onRemove(color.id)} />
            )
      }
    </div>

  )
}
  //for debugging
  ColorList.propTypes = {
    //colors: PropTypes.array,
    //onRate: PropTypes.func,
    //onRemove: PropTypes.func
    store: PropTypes.object//make sure store is an object
}

  export default ColorList
