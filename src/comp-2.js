import React from "react"
import { Button, List, ListItem, Link, ListItemAvatar, ListItemText, IconButton, Icon, Avatar, Typography, Pagination } from "@mui/material";

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
        return (
            <ListItem
                secondaryAction={
                    <IconButton onClick={() => this.delUser(index)} edge="end" aria-label="delete">
                        <Icon>delete_forrever</Icon>
                    </IconButton>
                }>
                <ListItemAvatar>
                    <Avatar src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.first_name + " " + user.last_name}
                    secondary={<Link href={"mailto:" + user.email} underline="hover">
                        {user.email}
                    </Link>}
                />
            </ListItem>

        )
    }

    delUser = (index) => {
        var u = this.state.users;
        u.splice(index, 1);
        this.setState({ users: u });
    }

    handleChange = (event, value) => {
        this.setState({ page: value }, () => { this.getUsers(); })
    }

    render() {

        return (
            <div>

                <Typography>Page: {this.state.page}</Typography>

                <List sx={{ width: "60%" }}>
                    {this.state.users.map(this.showUsers)}
                </List>
                {this.state.users.length < 1 &&
                    <Typography>This page is empty ...</Typography>
                }

                <Pagination count={2} page={this.state.page} onChange={this.handleChange} />
                <Button onClick={this.getUsers}>Refresh</Button>

            </div >
        )
    }
}