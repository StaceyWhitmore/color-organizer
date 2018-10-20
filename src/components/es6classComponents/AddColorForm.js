//This components role is to collect data and pass it on it is
//NOT concerned with what happens to that data.

import React, {Component} from 'react'

class AddColorForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e) {
    const {_title, _color, } = this.refs
    //  this.props.onNewColor(_title.value, _color.value)
    e.preventDefault()
    alert(`New Color: ${_title.value} ${_color.value}`)
    _title.value = ''
    _color.value = '#000000'
    _title.focus()
  }
/**
  const logColor = (title, color) =>
  console.log(`New color: ${title} | ${value}`)
  */


render() {
  return (
    <form onSubmit={this.submit}>
      <input ref="_title"
             type="text"
             placeholder="color title..." required/>
      <input ref="_color"
             type="color" required/>
      <button>+</button>
    </form>
  )
}
}

export default AddColorForm
