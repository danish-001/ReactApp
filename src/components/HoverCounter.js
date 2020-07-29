import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
  
  render() {

    const { count, incrementCount} = this.prop
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
          Hoverded {count} times
        </h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
