import React, { Component } from 'react'


export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scooby: props.scooby,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ scooby: e.target.value })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.state.scooby}
          onChange={this.handleChange}
        /> 
        <h5>{ this.state.scooby }</h5>
      </div>
    )
  }
}

