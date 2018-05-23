import React, { Component } from 'react'

class Button extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
    this.addCounter = this.addCounter.bind(this)
  }
  addCounter() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render() {
    return (
      <button
        className="button"
        onClick={this.addCounter}
      >
        {this.state.counter}
      </button>
    )
  }
}
export default Button