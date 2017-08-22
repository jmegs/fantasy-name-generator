import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      output: ""
    }
  }

  handleChange = input => {
    this.setState({ input })
  }

  alphabetize = input => {
    const alpha = str => str.split("").sort().join("")
    let words = input.split(" ")
    let output = words
      .map(word => {
        return alpha(word)
      })
      .join(" ")
    return output
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="input"
          placeholder="Type your name"
          onChange={e => this.handleChange(e.target.value)}
        />
        <h2>
          {this.output}
        </h2>
      </div>
    )
  }
}

export default App
