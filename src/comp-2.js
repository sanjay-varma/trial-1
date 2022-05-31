import React from "react"

export default class Comp2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = { users: [], page: 1 }
    }

    componentDidMount = () => {
        this.getUsers();
    }

    getUsers = () => {
        fetch("https://reqres.in/api/users?page=" + this.state.page)
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    users: resJson.data
                })
            })
    }

    showUsers = (user, index) => {
        const usrRow = [];
        Object.keys(user).forEach((key) => { usrRow.push(<>{user[key] + " "}</>) })
        return (
            <div >
                {usrRow}
                <button onClick={() => this.delUser(index)}>X</button>
            </div>
        )
    }

    delUser = (index) => {
        var u = this.state.users;
        u.splice(index, 1);
        this.setState({ users: u });
    }

    render() {

        return (
            <div>
                <button onClick={this.getUsers}>Refresh</button> Page: {this.state.page}
                {this.state.users.map(this.showUsers)}
                {this.state.users.length < 1 &&
                    <div>This page is empty ...</div>
                }
                <button onClick={() => {
                    this.setState({ page: this.state.page + 1 }, () => { this.getUsers(); });
                }}>Next</button>
                <button onClick={() => {
                    if (this.state.page >= 2)
                        this.setState({ page: this.state.page - 1 }, () => { this.getUsers(); });
                }}>Previous</button>
            </div >
        )
    }
}