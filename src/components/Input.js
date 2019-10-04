import React, { Component } from 'react'


export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scooby: props.scooby,
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.scooby} 
        /> 
        <h5>{ this.state.scooby }</h5>
      </div>
    )
  }
}

