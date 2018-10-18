import React, {Component} from 'react'

class AddColorForm extends Component {

render() {
  return (
    <form onSubmit={e=>e.preventDefault()}>
      <input
            type="text"
            placeholder="color title..." required/>
      <input 
             type="color" required/>
      <button>+</button>
    </form>
  )
}
}

export default AddColorForm
