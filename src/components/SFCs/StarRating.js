import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Star from './Star'

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
  <div className="star-rating">
    {
      [...Array(totalStars)].map((n,i) =>
          <Star
            key={i}
            selected={i<starsSelected}
            onClick={ () => onRate(i+1)}
          />
    )
    }
  </div>

}//close <StarRating />

StarRating.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func
}

export default StarRating
