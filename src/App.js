import React from "react";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.inp1 = React.createRef();
    this.inp2 = React.createRef();
    this.state = { bg: "red", x: 0, y: 0, msg: "Hello World!" }
    setInterval(this.onTimerX, 500)
    setInterval(this.onTimerY, 700)
  }

  onTimerX = () => {
    this.setState({ x: this.state.x + 1 }, () => { })
  }

  onTimerY = () => {
    this.setState({ y: this.state.y + 1 })
  }

  inputChanged = (e) => {
    this.setState({ bg: e.target.value, msg: this.inp1.current.value })
  }

  buttonClicked = () => {
    this.setState({ bg: this.inp2.current.value, x: 0, y: 0 })
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.bg, height: 100, widht: 100 }}>
        <strong>{this.state.msg} - {this.state.x} - {this.state.y}</strong><br />
        <input ref={this.inp1} onChange={this.inputChanged} /><br />
        <input ref={this.inp2} />
        <button onClick={this.buttonClicked} > Change </button>
      </div>
    )
  }
}

