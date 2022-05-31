import React from "react";

export default class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.col = React.createRef();
        this.state = { bg: props.compColor }
        console.log("constructor " + this.state.bg)
    }

    componentDidMount() {
        console.log("componentDidMount " + this.state.bg)
        this.startTime = Date.now();
    }

    componentWillUnmount() {
        var endTime = Date.now();
        console.log("componentWillUnmount " + this.state.bg)
        this.props.onUnmount((endTime - this.startTime) / 1000)
    }

    clickHandler = () => {
        this.setState({ bg: this.col.current.value });
    }

    render() {
        return (
            <div onClick={this.clickHandler} style={{ backgroundColor: this.state.bg, height: 100 }}>
                Click to change color to <input ref={this.col}></input>
            </div>
        )
    }
}