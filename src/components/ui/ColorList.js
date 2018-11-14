import PropTypes from 'prop-types'//no longer from 'react'
import Color from './Color'
import '../../stylesheets/ColorList.scss'
import {rateColor, removeColor} from '../../actions'
import {sortFunction} from '../../lib/array-helpers'


const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
    <div className="color-list">
      { (colors.length === 0) ?
          <p>No Colors Listed. (Add a Color)</p> :
              colors.map(color =>
            <Color key={color.id}
              {...color}
              onRate={(rating) => onRate(color.id, rating)}
              onRemove={() => onRemove(color.id)}/>
            )
      }
    </div>


  //PropTyoes for debugging
  ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
    //store: PropTypes.object//make sure store is an object
}

  export default ColorList
