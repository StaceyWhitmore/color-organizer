//This a Stateless Functional Component who's parent is <App/>
//This component will notify its parent when colors are rated or removed.

import React from 'react'
import Color from './Color'

const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
  <div>
    {
      (colors.lenth === 0) ?
        <p>No colors listed. (Add a color) </p> :
        colors.map(color =>
          <Color key={color.id}
            {...color}
            onRate={(rating) => onRate(color.id, rating)}
            onRemove={() => onRemove(color.id)} />
          )
    } 
  </div>

  export default ColorList
