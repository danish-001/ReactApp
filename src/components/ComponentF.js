import React, { Component } from 'react'
import {userConsumer} from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <userConsumer>
          { //Step 3:- Consuming the context value
            (username) => {
            return <div>Hello, {username}</div>
            }
          }
        </userConsumer>
      </div>
    )
  }
}

export default ComponentF
