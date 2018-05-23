import React, { Component } from 'react'

class PlusTenButton extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
    this.addCounter = this.addCounter.bind(this)
  }
  addCounter() {
    this.setState({
      counter: this.state.counter + 10,
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
export default PlusTenButton