import React from 'react';
import './App.css';

function App() {

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if(hours >= 0 && hours <= 12 ) timeOfDay = "Morning";
  else if( hours > 12 && hours <= 17) timeOfDay = " Afternoon"

  return (
    <div className="App">
      <h1>BHAVESH REDDY VEDIRE</h1>
      <p>It is {hours}O' Clock</p>
      <p>Good {timeOfDay}</p>
    </div>
  );
}

export default App;
