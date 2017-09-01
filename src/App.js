import React, { Component } from "react"
import {
  Wrapper,
  Title,
  Version,
  FormField,
  Label,
  Intro,
  Name,
  Credits
} from "./Styled"

const intros = [
  "Go forth and conquer",
  "You're our only hope",
  "I dub thee",
  "Arise!"
]

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

  titleCase = str => {
    return str
      .toLowerCase()
      .split(" ")
      .map(function(word) {
        return word.replace(word[0], word[0].toUpperCase())
      })
      .join(" ")
  }

  randomFromArray = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
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
        <Intro>{this.randomFromArray(intros)}</Intro>
        <Name>{this.titleCase(this.state.output)}</Name>
      </div>
    )
  }

  render() {
    return (
      <Wrapper>
        <Title>
          Fantasy Name Generator <Version>v1.0</Version>
        </Title>
        <form onSubmit={e => this.handleSubmit(e)} autoComplete="off">
          <FormField
            type="text"
            name="input"
            value={this.state.input}
            onFocus={this.resetOutput}
            onChange={e => this.handleChange(e.target.value)}
          />
          <Label htmlFor="input">👆 enter player name</Label>
          {/* <button type="submit">Generate Name</button> */}
        </form>
        {this.state.output != null && this.renderName()}
        <Credits>
          <p>
            Inspired by{" "}
            <a href="https://twitter.com/DeaExLena/status/894421568343781376">
              {" "}
              this
            </a>{" "}
            tweet by <a href="https://twitter.com/DeaExLena">@DeaExLena</a>.
          </p>
          Made by <a href="http://twitter.com/jmegs">@jmegs</a>.
        </Credits>
      </Wrapper>
    )
  }
}

export default App
