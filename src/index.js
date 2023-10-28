import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  var buttonText = {value: "CLick Me!!"};

  return(
    <div>
      <label htmlFor="name">Enter your Name:</label>
      <input id="name" type="text"></input>
      <button type="button" style={{backgroundColor:'red', color:'white'}}>
      {buttonText.value}
      </button>
    </div>
)
}

ReactDOM.render(
  <App />,
  document.getElementById('root'))
