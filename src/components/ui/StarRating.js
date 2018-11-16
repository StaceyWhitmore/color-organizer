import PropTypes from 'prop-types'
//import React from 'react'
import Star from './Star'

// [...Array(5)] creates an empty array with a length of 5
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


StarRating.propTypes = {
	starsSelected: PropTypes.number,
	totalStars: PropTypes.number,
	onRate: PropTypes.func
}

export default StarRating
