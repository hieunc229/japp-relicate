import React from "react";
import { TextInput, View, Button } from "react-native";
import conn from "./conn";

const viewStyles = {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)'
}

const inputStyles = {
    fontSize: 16,
    flex: 1,
}

export default class InsertView extends React.Component {

    text;

    handleInsert = () => {
        conn.Users.insert({ name: this.text });
    }

    render() {
        return <View style={viewStyles}>
            <TextInput
                ref={ref => this.input = ref}
                style={inputStyles}
                onChangeText={text => this.text = text}
                placeholder="Enter a name..." />
            <Button
                onPress={this.handleInsert}
                title="Insert"
            />
        </View>
    }
}