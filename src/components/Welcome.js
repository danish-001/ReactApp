import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>AKA {this.props.heroName}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Welcome
