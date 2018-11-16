//import { compose } from 'redux'
import Page404 from './Page404'
import PropTypes from 'prop-types'
import '../../../stylesheets/ColorDetails.scss'

//add location
const ColorDetails = ({title, color, history, location}) =>
	(!color) ?
		<Page404 location={location}/> :
		<div className="color-details"
			style={{backgroundColor: color}}
			onClick={() => history.goBack()}>
			<h1>{title}</h1>
			<h1>{color}</h1>
		</div>

ColorDetails.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}

export default ColorDetails
