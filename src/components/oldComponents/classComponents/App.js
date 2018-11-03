import React, { Component } from 'react';
import { v4 } from 'uuid'//npm install uuid --save
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'
import './stylesheets/APP.scss'
//import colors from './data/colors'




class App extends Component {
  constructor(props) {
    super(props) //app deserves SUPER PROPS!!! (Brought to you by the Component) class
    this.state = {
      colors:[] //set colors to an empty Array
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)

  }//close constructor()
  //UPdate: replace instance of `this.state` with `prevState`
  addColor(title, color) {
    /*const*/this.setState(prevState => ({
    colors : [
           ...prevState.colors,
          {
              id: v4(),
              title,
              color,
              rating:0
          }
        ]
  }))
    //this.setState({colors})
  }//close addColor()
  rateColor(id, rating) {
    this.setState(prevState => ({
      colors : prevState.colors.map(color =>
        (color.id !== id) ?
          color :
          {
            ...color,
            rating
          }
        )
    }))
    //this.setState({colors})
  } //close rateColor()

  removeColor(id) {
    this.setState((prevState) => ({
      colors : prevState.colors.filter(color => color.id !== id)
    }))
    //this.setState({colors})
  } //close removeColor()

  render() {
    //attach the following three methods to <App/>. Thanks to destructuring there is no tedius . operator syntax involved
    const { addColor, rateColor, removeColor } = this //destructure above defined addColor() method from this component SUPER <App />
    const { colors   } = this.state/*****/
    /*
    const logColor = (title, color) => {
      console.log(`New Color: ${title} | ${color}`)
      alert(`New Color: ${title} | ${color}`)
    }
    */
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors}
                    onRate={rateColor}
                    onRemove={removeColor}/>
      </div>
    );
  }//close render()
} //close <App />

// <AddColorForm onNewColor={addColor} />

/* for debugging:
<AddColorForm onNewColor={(title, color) => {
  console.log(`TODO: add new ${title} and ${color} to the list`)
  console.log(`render UI with new color`)


OR:
<AddColorForm onNewColor={logColor} />

}} />

*/


export default App;
