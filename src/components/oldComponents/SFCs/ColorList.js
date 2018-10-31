//This a Stateless Functional Component who's parent is <App/>
//This component will notify its parent when colors are rated or removed.
import React from 'react'
import PropTypes from 'prop-types'//no longer from 'react'
//import Color from './Color'
//import {rateColor, removeColor} from '../actions'
//import {sortFunction} from './lib/array-helpers'
import '../stylesheets/ColorList.scss'


const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
  <div className="color-list">
    {(colors.lenth === 0) ?
        <p>No colors listed. (Add a color) </p> :
        colors.map(color =>
          <Color key={color.id}
            {...color}
            onRate={(rating) => onRate(color.id, rating)}
            onRemove={() => onRemove(color.id)} />
          )
    }
  </div>

  ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

  export default ColorList
