import React, { Component } from 'react'
import axios from 'axios'

class HTTPGet extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      posts: [],
      error: ''
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      
       .then(response => {
        console.log(response)
        this.setState(
          {
            posts: response.data
          }
        )
      })
      .catch(error => {
        console.log(error)
        this.state({
          error: 'Error Retrieving the Data'
        })
      })
  }
  
  render() {

    const { posts, error} = this.state
    return (
      <div>
        <h1>***Get Posts***</h1>
        {
          posts.lengh ? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null
        }
        {
          error ? <div>{error}</div> : null
        }
      </div>
    )
  }
}

export default HTTPGet
