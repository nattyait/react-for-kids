import React, { Component } from 'react'

class RandomColorButton extends Component {
  constructor() {
    super()
    this.state = {
      char_code: 65,
    }
    this.changeLetter = this.changeLetter.bind(this)
  }
  changeLetter() {
    this.setState({
      char_code: this.state.char_code + 1,
    })
  }

  render() {
    return (
      <button
        className="button"
        onClick={this.changeLetter}
      >
        { String.fromCharCode(this.state.char_code) }
      </button>
    )
  }
}

export default RandomColorButton