import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: "coral",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginTop: 30,
    },
});

export default Header;
