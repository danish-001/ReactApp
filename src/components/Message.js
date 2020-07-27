import React, { Component } from 'react'

class Message extends Component {

  state = {
    message: "Chris Hemsworth AKA Thor"
  }

  Thunder() {
    this.setState({
      message: 'The God of Thunder'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.Thunder()}>Guess What?</button>
      </div>
    )
  }
}

export default Message
