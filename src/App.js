import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Greet Name="Robert"/>
      <Welcome heroName="Iron Man">
        <p>A legend and an inspiration of many</p>
      </Welcome>
      
      <Greet Name="Chris"/>
      <Welcome heroName="Thor">
        <button>Thunder</button>
      </Welcome>
      <Greet Name="Chadwik"/>
      <Welcome heroName="Balck Panther" />
      
      <Message />
    </div>
  )
}

export default App;
