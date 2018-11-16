//import {PropTypes, Component } from 'react' //PropTypes now in separate module: 'prop-types'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/AddColorForm.scss'//'../../stylesheets/Menu.scss'

//import { addColor } from '../../actions'

//const AddColorForm = ({onNewColor=f=>f}) => {
//const AddColorForm = ({ store }) => { //now the store will be changed(resulting in UI update and re-render()) each time a new color is added.
//let _title, _color
class AddColorForm extends Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)

	}

	/*const*/
	submit(e) {
		const { _title, _color } = this.refs
		const { onNewColor } = this.props
		e.preventDefault() //Overrides default load bx
		//store.dispatch(addColor(_title.value, _color.value)) //OLD
		onNewColor(_title.value, _color.value)
		_title.value   = ''//reset the value to empty
		_color.value   = '#000000' //..and the color to blank
		_title.focus() //and return focus to the title input field
	}//close submit(e)

	/*
 <form className="add-color" onSubmit={this.submit}>
   <input ref={input => _title = input}
 */
	render() {
		return(
			<form className="add-color" onSubmit={this.submit}>
				<input ref="_title"
					type="text"
					placeholder="color name ..." required/>
				<input ref="_color"
					type="color" required/>
				<button>Add</button>
			</form>
		)
	}


}
//}//close <AddColorForm/> SFC

AddColorForm.propTypes = {
	onNewColor: PropTypes.func
	//store: PropTypes.object
}

AddColorForm.defaultProps = {
	onNewColor: f=>f
}

export default AddColorForm
