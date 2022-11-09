import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TodoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons
                    name="delete-outline"
                    size={18}
                    color="#333"
                    style={styles.icon}
                />
                <Text>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: "row",
    },
    icon: {
        paddingRight: 10,
    },
});

export default TodoItem;
