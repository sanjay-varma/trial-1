import React from "react";

var msg = "Hello World!";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { bg: "red", x: 0 }
    setTimeout(this.onTimer, 500)
  }

  onTimer = () => {
    this.setState({ x: this.state.x + 1 })
    setTimeout(this.onTimer, 500)
  }

  inputChanged = (e) => {
    this.setState({ bg: e.target.value })
  }

  buttonClicked = () => {
    this.setState({ bg: document.getElementById("input2").value, x: 0 })
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.bg, height: 100, widht: 100 }}>
        <strong>{msg} - {this.state.x}</strong><br />
        <input onChange={this.inputChanged} /><br />
        <input id="input2" />
        <button onClick={this.buttonClicked} > Change </button>
      </div>
    )
  }
}

