import React from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ComponentC from './components/ComponentC'
import { userProvider } from './components/UserContext'
import HTTPGet from './components/HTTPGet'
import HTTPPost from './components/HTTPPost'


function App() {
  return ( //Step 2:- Providing a context value
    <div className="App">
      <HTTPPost />
      {/* <HTTPGet /> */}
      {/* <userProvider value="Danish">
        <ComponentC />
      </userProvider> */}
      {/* <HoverCounter />
      <ClickCounter /> */}
      {/* <PortalDemo /> */}
      {/* <LifecycleA /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <Greet Name="Robert"/>
      <Welcome heroName="Iron Man">
        <p>A legend and an inspiration for many</p>
      </Welcome>
      
      <Greet Name="Chris"/>
      <Welcome heroName="Thor">
        <button>Thunder</button>
      </Welcome>
      <Greet Name="Chadwik"/>
      <Welcome heroName="Black Panther" />
      
      <Message /> */}
    </div>
  )
}

export default App;
