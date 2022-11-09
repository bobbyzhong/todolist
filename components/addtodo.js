import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    };

    const clear = () => {
        setText("");
    };

    return (
        <View>
            <TextInput
                autoCapitalize={false}
                autoCorrect={false}
                style={styles.input}
                placeholder="add to do"
                onChangeText={(val) => changeHandler(val)}
                value={text}
            />
            <View style={styles.buttonCont}>
                <Button
                    onPress={() => {
                        submitHandler(text);
                        clear();
                    }}
                    clearButtonMode="always"
                    title="add to do"
                    color="white"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#dad",
    },
    buttonCont: {
        backgroundColor: "coral",
    },
});

export default AddTodo;
