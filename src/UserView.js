import React from "react";
import { Text, View, Button } from "react-native";
import conn from "./conn";

const viewStyles = {
    padding: 20,
}

const inputStyles = {
    fontSize: 16
}

export default class UserView extends React.Component {

    state = { users: [] };

    componentDidMount = () => {
        conn.Users.onLoaded(() => {
            this._refreshUpNext();
        })
        conn.Users.onUpdate(() => this._refreshUpNext());
        conn.Users.onRemove(() => this._refreshUpNext());
    }

    _refreshUpNext() {
        console.log("update");
        let users = conn.Users.data();
        this.setState({ users })
    }

    renderItem = (user) => {
        return <UserItem key={`user-${user.id}`} user={user} />
    }

    render() {
        let { users } = this.state;
        return <View style={viewStyles}>
            {users.map(this.renderItem)}
        </View>
    }
}

function UserItem(props) {
    let { user } = props;
    function handleClick() {
        conn.Users.remove(user.id);
    }
    return <View style={itemStyles} key={`user-${user.id}`}>
        <Text>{user.name}</Text>
        <Button title="[x]" onPress={handleClick} />
    </View>
}

const itemStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}