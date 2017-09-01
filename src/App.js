import React, { Component } from "react"
import {
  Wrapper,
  Title,
  FormField,
  Label,
  Intro,
  Name,
  Credits
} from "./Styled"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      output: null
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
    let words = input.toLowerCase().split(" ")
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
    this.setState({ output: name })
    this.setState({ input: "" })
    document.activeElement.blur()
  }

  resetOutput = () => {
    this.setState({ output: null })
  }

  renderName = () => {
    return (
      <div>
        <Intro>Go forth and conquer</Intro>

        <Name>{this.state.output}</Name>
      </div>
    )
  }

  render() {
    return (
      <Wrapper>
        <Title>Fantasy Name Generator</Title>
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormField
            type="text"
            name="input"
            value={this.state.input}
            onFocus={this.resetOutput}
            onChange={e => this.handleChange(e.target.value)}
          />
          <Label htmlFor="input">Player name</Label>
          {/* <button type="submit">Generate Name</button> */}
        </form>
        {this.state.output != null && this.renderName()}
        <Credits>
          Made by <a href="http://twitter.com/jmegs">@jmegs</a>.
          <p>
            Inspired by{" "}
            <a href="https://twitter.com/DeaExLena/status/894421568343781376">
              {" "}
              this
            </a>{" "}
            tweet by <a href="https://twitter.com/DeaExLena">@DeaExLena</a>.
          </p>
        </Credits>
      </Wrapper>
    )
  }
}

export default App
