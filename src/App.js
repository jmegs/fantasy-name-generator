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
    const alpha = str =>
      str
        .split("")
        .sort()
        .join("")
    let words = input.split(" ")
    let output = words
      .map(word => {
        return alpha(word)
      })
      .join(" ")
    return output
  }

  handleSubmit = e => {
    e.preventDefault()
    const name = this.alphabetize(this.state.input)
    this.setState({ input: "" })
    this.setState({ output: name })
  }

  render() {
    return (
      <div>
        <h2>{this.state.output}</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="input"
            value={this.state.input}
            placeholder="Type your name"
            onChange={e => this.handleChange(e.target.value)}
          />
          <button type="submit">Generate Name</button>
        </form>
      </div>
    )
  }
}

export default App
