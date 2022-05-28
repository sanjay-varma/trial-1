import React from "react";

export default class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.col = React.createRef();
        this.state = { bg: props.compColor }
    }

    componentDidMount() {
        this.startTime = Date.now();
    }

    componentWillUnmount() {
        var endTime = Date.now();
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