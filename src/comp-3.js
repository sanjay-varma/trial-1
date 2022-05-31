import React from "react"

export default class Comp3 extends React.Component {
    constructor(props) {
        super(props);

        this.email = React.createRef();
        this.password = React.createRef();
        this.message = React.createRef();
    }

    doLogin = () => {
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.email.current.value.trim(),
                password: this.password.current.value.trim()
            })
        })
            .then((res) => res.json())
            .then((resJSON) => {
                //console.log(resJSON);
                if (resJSON.error) { this.message.current.innerText = resJSON.error }
                if (resJSON.token) { this.message.current.innerText = "Login success - " + resJSON.token }
            })
    }

    render() {
        return (
            <div>
                email: <input ref={this.email} /><br />
                password: <input type="password" ref={this.password} /><br />
                <button onClick={this.doLogin}>Login</button><br />
                <label ref={this.message} />
            </div>
        )
    }
}