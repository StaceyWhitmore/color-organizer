import React from 'react'
import PropTypes from 'prop-types'

const AddColorForm = ({onNewColor=f=>f}) => {
  //First check and see if the func property exists BEFORE trying to invoke it!
  //(this makes 'two-way-data-binding'(i.e. Inverse Data Flow) optional)
  //If new color it not supplied it will default to the dummy f(x): f=>f
  let _title, _color
  const submit = e => {
    e.preventDefault() //Overrides default load bx
    onNewColor(_title.value, _color.value)
      _title.value   = ''
      _color.value   = '#000000'
      _title.focus()
  }
  return(
    <form onSubmit={submit}>
      <input ref={input => _title = input}
             type="text"
             placeholder="color name ..." required/>
      <input ref={input => _color = input}
             type="color" required/>
      <button>Add</button>
    </form>
  )
}//close <AddColorForm/> SFC

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
}
/*
AddColorForm.defaultProps = {
  onNewColor: f=>f
}
*/

export default AddColorForm
