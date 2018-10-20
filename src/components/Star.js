import React from 'react'
import PropTypes from 'prop-types'//npm install --save prop-types
import '../stylesheets/Star.scss'


const Star = ({selected=false, onClick=f=>f}) =>
(<div className={(selected) ? "star selected" : "star"}
     onClick={onClick}>
</div>)

//To facilitate debugging...
Star.propTypes = {
  selected:PropTypes.bool,
  onClick: PropTypes.func
}

export default Star
