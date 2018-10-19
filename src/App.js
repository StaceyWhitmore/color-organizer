import React, { Component } from 'react';
import { v4 } from 'uuid'//npm install uuid --save
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'
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
  addColor(title,color) {
    const colors = [
      ...this.state.colors,//unroll all of color props from out of state obj
      {
          id: v4(), //:
          title,
          color,
          rating:0 //:
      }
    ]
  }//close addColor()
  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id !== id) ?
        color:
        {
          ...color,
          rating
        }
    )
    this.setState({colors})
  } //close rateColor()

  removeColor(id) {
    const colors = this.state.colors.filter(
      color => color.id !== id
    )
    this.setState({colors})
  } //close removeColor()

  render() {
    //attach the following three methods to <App/>. Thanks to destructuring there is no tedius . operator syntax involved
    const { addColor, rateColor, removeColor } = this //destructure above defined addColor() method from this component SUPER <App />
    const { colors   } = this.state/*****/
    return (
      <div>
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} />
      </div>
    );
  }//close render()
} //close <App />

export default App;
