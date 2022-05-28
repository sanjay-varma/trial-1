import React from "react";

export default class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.col = React.createRef();
        this.state = { bg: props.compColor }
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