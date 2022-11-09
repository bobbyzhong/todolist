import React, { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Header from "../../components/header.js";
import TodoItem from "../../components/TodoItem.js";
import AddTodo from "../../components/addtodo.js";

const ToDoList = () => {
    const [todos, setTodos] = useState([
        { text: "buy coffee", key: "1" },
        { text: "create an app", key: "2" },
        { text: "play on the switch", key: "3" },
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.key != key);
        });
    };

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos,
                ];
            });
        } else {
            Alert.alert(
                "Not Long Enough",
                "To Dos must be more than 3 characters long",
                [
                    {
                        text: "Understood",
                        onPress: () => console.log("Alert Closed"),
                    },
                ]
            );
        }
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log("Dismissed Keyboard");
            }}
        >
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => {
                                return (
                                    <TodoItem
                                        item={item}
                                        pressHandler={pressHandler}
                                    />
                                );
                            }}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 40,
        flex: 1,
    },
    list: {
        marginTop: 20,
        flex: 1,
    },
});

export default ToDoList;
