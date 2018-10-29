const v4 = require('uuid/v4');


const getTime = () => new Date().toString()

const sampleState =
{
  colors: [
    {
      "id": v4(),
      "title": "Blue del Mar",
      "color": "#0070ff",
      "rating": 5,
      "timestamp": `${getTime()}`
    },
    {
      "id": v4(),
      "title": "Pink is the new black",
      "color": "#ff00f7",
      "rating": 3,
      "timestamp": `${getTime()}`
    },
    {
      "id": v4(),
      "title": "Tomato",
      "color": "#d10012",
      "rating": 2,
      "timestamp": `${getTime()}`
    },
    {
      "id": v4(),
      "title": "Verde del Pasto",
      "color": "#67bf4f",
      "rating": 3,
      "timestamp": `${getTime()}`
    }
  ]

}

console.log(sampleState)
